'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function FileUpload() {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [results, setResults] = useState(null);

  // Create a local URL so the user can preview the image immediately
  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl('');
    }
  }, [file]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResults(null);
    setMessage({ text: '', type: '' });
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
        credentials: 'include',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: 'File uploaded successfully!', type: 'success' });
        setResults(data);
        setFile(null);
        document.getElementById('file-upload').value = '';
      } else {
        setMessage({
          text: data.message || 'Failed to upload file',
          type: 'error',
        });
      }
    } catch (error) {
      setMessage({
        text: 'An error occurred during upload',
        type: 'error',
      });
    } finally {
      setUploading(false);
    }
  };

  // Classification logic
  const predictedClass = results?.classifications?.[0] ?? null;
  const topTwoClasses = results?.classifications?.slice(0, 2) ?? [];
  const confidenceMargin =
    topTwoClasses.length === 2
      ? (topTwoClasses[0].score - topTwoClasses[1].score) * 100
      : 0;

  // Data for Recharts
  const chartData =
    results?.classifications?.map((item) => ({
      name: item.label,
      score: parseFloat((item.score * 100).toFixed(1)),
    })) ?? [];

  return (
    <div className="bg-gray-900 min-h-screen w-full flex flex-col items-center py-8">
      {/* Outer container for content */}
      <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8">

        <h2 className="text-lg sm:text-xl font-semibold text-white mb-6">
          Upload an Image for Analysis
        </h2>

        {/* Upload status messages */}
        {message.text && (
          <div
            className={`p-3 mb-4 rounded-md ${
              message.type === 'success'
                ? 'bg-green-100/20 text-green-400'
                : 'bg-red-100/20 text-red-400'
            }`}
          >
            <p className="text-sm sm:text-base">{message.text}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleUpload} className="space-y-4 sm:space-y-6">
          <div>
            <label
              className="block text-white text-sm sm:text-base mb-2"
              htmlFor="file-upload"
            >
              Choose an image
            </label>
            <input
              id="file-upload"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-sm sm:text-base text-white 
              file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm sm:file:text-base file:text-white 
              file:bg-blue-600 hover:file:bg-blue-700 file:transition-colors"
            />
          </div>

          {file && (
            <p className="text-white text-sm sm:text-base">
              Selected: <span className="font-medium">{file.name}</span>
            </p>
          )}

          <button
            type="submit"
            disabled={uploading || !file}
            className="w-full sm:w-auto px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-md 
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
            disabled:opacity-50 hover:bg-blue-700 transition-colors"
          >
            {uploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>

        {/* Results Section */}
        {results?.classifications?.length > 0 && (
          <div className="mt-12">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Uploaded Image (Local Preview) */}
              <div className="lg:w-1/2">
                <h3 className="text-white text-xl font-semibold mb-4">
                  Uploaded Image
                </h3>
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Uploaded Preview"
                    className="rounded-md shadow-md w-full h-auto object-contain bg-gray-800"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-800 rounded-md flex items-center justify-center">
                    <p className="text-white/70">Image preview not available</p>
                  </div>
                )}
              </div>

              {/* Classification Results & Progress Bars */}
              <div className="lg:w-1/2">
                <h3 className="text-white text-xl font-semibold mb-4">
                  Classification Results
                </h3>

                <div className="space-y-4">
                  {results.classifications.map((res) => (
                    <div key={res.label} className="flex items-center">
                      <div className="w-32 text-white">{res.label}</div>
                      <div className="w-full bg-gray-800 rounded-full h-4 mx-3">
                        <div
                          className="bg-blue-500 h-4 rounded-full"
                          style={{ width: `${(res.score * 100).toFixed(1)}%` }}
                        ></div>
                      </div>
                      <div className="w-16 text-white text-right">
                        {(res.score * 100).toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  {predictedClass && (
                    <p className="text-green-400 text-base sm:text-lg">
                      <strong>Most Likely Class:</strong>{' '}
                      {predictedClass.label} (
                      {(predictedClass.score * 100).toFixed(2)}%)
                    </p>
                  )}
                  {topTwoClasses.length > 1 && (
                    <p className="text-white text-sm sm:text-base">
                      <strong>Top 2:</strong>{' '}
                      {topTwoClasses[0].label}, {topTwoClasses[1].label}
                    </p>
                  )}
                  <p className="text-green-400 text-base sm:text-lg">
                    <strong>Confidence Margin:</strong>{' '}
                    {confidenceMargin.toFixed(2)}%
                  </p>
                </div>
              </div>
            </div>

            {/* Full-Width Bar Chart */}
            <div className="mt-12">
              <h3 className="text-white text-xl sm:text-2xl font-semibold mb-4">
                Confidence Score Distribution
              </h3>
              <div className="w-full h-64 bg-gray-800 rounded-md">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis
                      stroke="#ccc"
                      label={{
                        value: 'Confidence (%)',
                        angle: -90,
                        position: 'insideLeft',
                        fill: '#ccc',
                      }}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#333', border: 'none' }}
                      labelStyle={{ color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                    />
                    <Legend wrapperStyle={{ color: '#fff' }} />
                    <Bar dataKey="score" fill="#3b82f6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
