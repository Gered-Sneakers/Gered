const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.post('/upload-image', express.json({ limit: '10mb' }), (req, res) => {
  const { imageData, filename } = req.body;

  if (!imageData || !filename) {
    return res.status(400).json({ message: 'Missing imageData or filename' });
  }

  const filePath = path.join('public/brands', filename);
  const base64Data = imageData.replace(/^data:image\/\w+;base64,/, '');

  fs.writeFile(filePath, base64Data, 'base64', (err) => {
    if (err) {
      console.error("❌ Error saving file:", err);
      return res.status(500).json({ message: 'Failed to save image' });
    }
    res.json({ message: '✅ Image uploaded', path: `/brands/${filename}` });
  });
});

module.exports = router;