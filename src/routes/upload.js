const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

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
    //filename: req.files.image[0].filename,
    url: `/public/Brands/${req.files.image[0].filename}`
    });
});

module.exports = router;