exports.uploadImage = (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
    res.json({ message: 'File uploaded', path: `/uploads/${req.file.filename}` });
  
    // OPTIONAL: forward file to ML backend
    // const mlAPI = 'http://localhost:8000/predict'; // ML backend
    // forward file via axios/multipart/form-data
  };
  