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
    <div className="w-full mx-auto bg-transparent backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl border border-white/20">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">Upload a File</h2>
      {message.text && (
        <div
          className={`p-3 mb-4 sm:mb-6 rounded-md backdrop-blur-sm ${
            message.type === 'success'
              ? 'bg-green-100/50 text-green-700'
              : 'bg-red-100/50 text-red-700'
          }`}
        >
          <p className="text-sm sm:text-base">{message.text}</p>
        </div>
      )}
      <form onSubmit={handleUpload} className="space-y-4 sm:space-y-6">
        <div>
          <label className="block text-white text-sm sm:text-base mb-2" htmlFor="file-upload">
            Choose a file
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            className="w-full px-3 sm:px-4 py-2 bg-white/30 border border-white/30 rounded-md text-sm sm:text-base text-white 
            file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm sm:file:text-base file:text-white 
            file:bg-[#4F1C51] hover:file:bg-[#210F37] file:transition-colors"
          />
        </div>
        {file && (
          <div className="space-y-1 sm:space-y-2">
            <p className="text-white text-sm sm:text-base">
              Selected file: <span className="font-medium">{file.name}</span>
            </p>
            <p className="text-white/70 text-xs sm:text-sm">
              Size: {(file.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}
        <button
          type="submit"
          disabled={uploading || !file}
          className="w-full sm:w-auto px-6 py-2 sm:py-3 bg-[#4F1C51] text-white text-sm sm:text-base rounded-md 
           focus:outline-none focus:ring-2 focus:ring-[#210F37] focus:ring-offset-2 
          disabled:opacity-50 enabled:bg-[#4F1C51] enabled:hover:bg-[#210F37] transition-colors"
        >
          {uploading ? 'Uploading...' : 'Upload File'}
        </button>
      </form>
    </div>
  );
}