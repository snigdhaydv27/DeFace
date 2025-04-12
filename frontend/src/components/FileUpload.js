'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function FileUpload() {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage({ text: 'Please select a file', type: 'error' });
      return;
    }

    setUploading(true);
    setMessage({ text: '', type: '' });

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/files/upload', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${document.cookie.split('; ').find(row => row.startsWith('token='))?.split('=')[1]}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: 'File uploaded successfully!', type: 'success' });
        setFile(null);
        document.getElementById('file-upload').value = '';
      } else {
        setMessage({ text: data.message || 'Failed to upload file', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'An error occurred during upload', type: 'error' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Upload a File</h2>
      {message.text && (
        <div
          className={`p-3 mb-4 rounded-md ${
            message.type === 'success'
              ? 'bg-green-100 text-green-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          {message.text}
        </div>
      )}
      <form onSubmit={handleUpload}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="file-upload">
            Choose a file
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        {file && (
          <div className="mb-4">
            <p className="text-gray-700">
              Selected file: <span className="font-medium">{file.name}</span>
            </p>
            <p className="text-gray-500 text-sm">
              Size: {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}
        <button
          type="submit"
          disabled={uploading || !file}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
      </form>
    </div>
  );
}