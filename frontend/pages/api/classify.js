// import formidable from 'formidable';
// import axios from 'axios';
// import fs from 'fs';

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// async function callHuggingFaceAPI(apiUrl, data, headers, retries = 3) {
//   for (let i = 0; i < retries; i++) {
//     try {
//       const response = await axios.post(apiUrl, data, { headers });
//       return response.data;
//     } catch (error) {
//       if (i === retries - 1 || error.response?.status !== 503) {
//         throw error; // Rethrow if retries are exhausted or error is not 503
//       }
//       console.warn(`Retrying... (${i + 1}/${retries})`);
//       await new Promise((resolve) => setTimeout(resolve, (i + 1) * 1000)); // Delay before retrying
//     }
//   }
// }

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const form = formidable({
//       multiples: false,
//       uploadDir: `${process.cwd()}/tmp`, // Temporary directory for uploads
//       keepExtensions: true, // Keep file extensions
//     });

//     try {
//       form.parse(req, async (err, fields, files) => {
//         if (err) {
//           console.error('Error parsing form:', err);
//           return res.status(500).json({ error: 'Error parsing form' });
//         }

//         console.log('Files received:', files);
//         const imageFile = files.image?.[0]; // Access the first file in the array
//         if (!imageFile) {
//           return res.status(400).json({ error: 'No image uploaded' });
//         }

//         if (!fs.existsSync(imageFile.filepath)) {
//           return res.status(500).json({ error: 'Uploaded file not found' });
//         }

//         try {
//           // Read the file into a buffer
//           const imageBuffer = await fs.promises.readFile(imageFile.filepath);
//           const base64Image = imageBuffer.toString('base64');

//           const apiUrl = 'https://api-inference.huggingface.co/models/prithivMLmods/AI-vs-Deepfake-vs-Real';
//           const headers = {
//             Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
//             'Content-Type': 'application/json',
//           };
//           const data = {
//             inputs: base64Image,
//           };

//           // Call the Hugging Face API
//           const responseData = await callHuggingFaceAPI(apiUrl, data, headers);
//           res.status(200).json(responseData);
//         } catch (error) {
//           console.error('Error calling Hugging Face API:', error.response?.data || error.message);
//           res.status(500).json({ error: 'Error calling Inference API' });
//         }
//       });
//     } catch (error) {
//       console.error('Error handling request:', error);
//       res.status(500).json({ error: 'Error parsing form' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }


import formidable from 'formidable';
import axios from 'axios';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

async function callHuggingFaceAPI(apiUrl, data, headers, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await axios.post(apiUrl, data, { headers });
      return response.data;
    } catch (error) {
      if (i === retries - 1 || error.response?.status !== 503) {
        throw error;
      }
      console.warn(`Retrying... (${i + 1}/${retries})`);
      await new Promise((resolve) => setTimeout(resolve, (i + 1) * 1000));
    }
  }
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const tmpDir = path.join(process.cwd(), 'tmp');
    if (!fs.existsSync(tmpDir)) {
      fs.mkdirSync(tmpDir);
    }

    const form = formidable({
      multiples: false,
      uploadDir: tmpDir,
      keepExtensions: true,
    });

    try {
      form.parse(req, async (err, fields, files) => {
        if (err) {
          console.error('Error parsing form:', err);
          return res.status(500).json({ error: 'Error parsing form' });
        }

        console.log('Files received:', files);
        const imageFile = files.image?.[0];
        if (!imageFile) {
          return res.status(400).json({ error: 'No image uploaded' });
        }

        if (!fs.existsSync(imageFile.filepath)) {
          return res.status(500).json({ error: 'Uploaded file not found' });
        }

        try {
          const imageBuffer = await fs.promises.readFile(imageFile.filepath);
          const base64Image = imageBuffer.toString('base64');

          const apiUrl = 'https://api-inference.huggingface.co/models/prithivMLmods/AI-vs-Deepfake-vs-Real';
          const headers = {
            Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
            'Content-Type': 'application/json',
          };
          const data = {
            inputs: base64Image,
          };

          const responseData = await callHuggingFaceAPI(apiUrl, data, headers);
          res.status(200).json(responseData);
        } catch (error) {
          console.error('Error calling Hugging Face API:', error.response?.data || error.message);
          res.status(500).json({ error: 'Error calling Inference API' });
        }
      });
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(500).json({ error: 'Error parsing form' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}