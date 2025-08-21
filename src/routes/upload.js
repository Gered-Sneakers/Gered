const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs'); 
const router = express.Router();

const uploadDir = path.resolve(__dirname, '..', 'img', 'brands');
fs.mkdirSync(uploadDir, { recursive: true });   // ensure folder exists

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    cb(null, file.originalname);         // keep exact name, e.g. "Salomon.svg"
  }
});

const upload = multer({ storage });

router.post('/uploadBrand', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

  // If your app serves `public` as static root:
  // app.use(express.static(path.join(process.cwd(), 'public')))
  // then URL is /Brands/<filename>
  const url = `/img/brands/${req.file.filename}`;

  res.json({
    message: 'Image uploaded',
    filename: req.file.filename,
    url
  });
});

/*
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'public/Brands'),
  filename: (req, file, cb) =>  {
    const ext = path.extname(file.originalname);
    const customName = req.body.brandName || 'default';
    const safeName = customName.replace(/\s+/g, '-').toLowerCase();
    cb(null, `${safeName}-${Date.now()}${ext}`);
    //cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage });

router.post('/uploadBrand', upload.fields([{name: 'image' , maxCount: 1}]), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");
  res.send({ 
    message: "Image uploaded", 
    filename: storage.fileName,
    //filename: req.files.image[0].filename,0
    url: `/public/Brands/${req.files.image[0].filename}`
    });
});
*/
module.exports = router;