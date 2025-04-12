import dbConnect from '@/lib/db';
import File from '@/models/File';
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  await dbConnect();

  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({ success: false, message: 'Not authorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const data = await request.formData();
    const file = data.get('file');

    if (!file) {
      return new Response(JSON.stringify({ success: false, message: 'No file uploaded' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const newFile = await File.create({
      filename: file.name,
      path: `/uploads/${file.name}`,
      size: file.size,
      mimetype: file.type,
      user: session.user.id,
    });

    return new Response(JSON.stringify({
      success: true,
      file: {
        id: newFile._id,
        filename: newFile.filename,
        size: newFile.size,
        uploadedAt: newFile.uploadedAt,
      },
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return new Response(JSON.stringify({ success: false, message: 'Error uploading file' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}