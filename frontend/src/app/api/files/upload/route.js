import dbConnect from '@/lib/db';
import File from '@/models/File';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import axios from 'axios';
import jwt from 'jsonwebtoken';

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
      const status = error.response?.status;
      if (i === retries - 1 || status !== 503) {
        throw error; 
      }
      console.warn(`Retrying... (${i + 1}/${retries}) due to status code ${status}`);
      
      await new Promise((resolve) => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
}


export async function POST(request) {
  await dbConnect();

  try {
    
    const cookieHeader = request.headers.get('cookie') || '';
    const token =
      cookieHeader
        .split('; ')
        .find((row) => row.startsWith('token='))?.split('=')[1] || null;

    if (!token) {
      return new Response(
        JSON.stringify({ success: false, message: 'Not authorized' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    // Verify the token using your JWT secret
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return new Response(
        JSON.stringify({ success: false, message: 'Invalid token' }),
        {
          status: 401,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    
    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
      return new Response(
        JSON.stringify({ success: false, message: 'No file uploaded' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Image = buffer.toString('base64');

    
    const apiUrl =
      'https://api-inference.huggingface.co/models/prithivMLmods/AI-vs-Deepfake-vs-Real';
    const hfHeaders = {
      Authorization: `Bearer ${process.env.HF_API_TOKEN}`,
      'Content-Type': 'application/json',
    };
    const bodyData = { inputs: base64Image };

    const responseData = await callHuggingFaceAPI(apiUrl, bodyData, hfHeaders);

    // Sort the results by confidence (score) in descending order
    const classifications = responseData.sort((a, b) => b.score - a.score);

    // Store file metadata in the database using user details from the token
    const newFile = await File.create({
      filename: file.name,
      path: `/uploads/${file.name}`, // Update this as needed
      size: file.size,
      mimetype: file.type,
      user: decoded.id, // assumes your payload has an "id" property
    });

    return new Response(
      JSON.stringify({
        success: true,
        file: {
          id: newFile._id,
          filename: newFile.filename,
          size: newFile.size,
          uploadedAt: newFile.uploadedAt,
        },
        classifications, 
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Error processing request',
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
}
