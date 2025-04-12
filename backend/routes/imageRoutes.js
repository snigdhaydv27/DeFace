const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const verifyToken = require('../middleware/authMiddleware');
const { uploadImage } = require('../controllers/imageController');

router.post('/upload', verifyToken, upload.single('image'), uploadImage);

module.exports = router;
