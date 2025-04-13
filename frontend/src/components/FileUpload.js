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
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [results, setResults] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setResults(null);
    setMessage({ text: '', type: '' });

    // Create preview URL for the selected image
    if (selectedFile && selectedFile.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setImagePreview(null);
    }
  };

  // Cleanup preview URL on component unmount
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

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

  const predictedClass =
    results?.classifications?.[0] ?? null;

  const topTwoClasses = results?.classifications?.slice(0, 2) ?? [];

  const confidenceMargin =
    topTwoClasses.length === 2
      ? (topTwoClasses[0].score - topTwoClasses[1].score) * 100
      : 0;

  const chartData =
    results?.classifications?.map((item) => ({
      name: item.label,
      score: parseFloat((item.score * 100).toFixed(1)),
    })) ?? [];

  return (
    <div className="w-full mx-auto bg-transparent backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg shadow-2xl border border-white/20">
      <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-white">
        Upload an Image for Analysis
      </h2>
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
            className="w-full px-3 sm:px-4 py-2 bg-white/30 border border-white/30 rounded-md text-sm sm:text-base text-white 
            file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm sm:file:text-base file:text-white 
            file:bg-[#4F1C51] hover:file:hover:bg-[#210F37] file:transition-colors"
          />
        </div>

        {file && (
          <div className="text-white text-sm sm:text-base">
            Selected: <span className="font-medium">{file.name}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={uploading || !file}
          className="w-full sm:w-auto px-6 py-2 sm:py-3 bg-[#4F1C51] text-white text-sm sm:text-base rounded-md 
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
          disabled:opacity-50 enabled:hover:bg-[#210F37] transition-colors"
        >
          {uploading ? 'Analysing...' : 'Analyse Image'}
        </button>
      </form>

      {/* === Results Section === */}
      {(results?.classifications?.length > 0 || imagePreview) && (
        <div className="mt-12 w-full">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* === Uploaded Image === */}
            <div className="lg:w-1/2">
              <h3 className="text-white text-xl font-semibold mb-4">
                {results ? 'Analysis Results' : 'Selected Image'}
              </h3>
              {imagePreview ? (
                <div className="relative rounded-lg overflow-hidden h-[400px]">
                  <img
                    src={imagePreview}
                    alt="Selected"
                    className="w-full h-full object-contain rounded-lg shadow-md bg-gray-800/50"
                  />
                  {uploading && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="text-white text-lg">Analyzing...</div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-full h-[400px] bg-gray-700 rounded-lg flex items-center justify-center">
                  <p className="text-white">No image selected</p>
                </div>
              )}
            </div>

            {/* === Classification Results === */}
            {results?.classifications?.length > 0 && (
              <div className="lg:w-1/2">
                <h3 className="text-white text-xl font-semibold mb-4">
                  Classification Results
                </h3>
                <div className="h-[400px] bg-gray-800/30 rounded-lg p-6 backdrop-blur-sm overflow-y-auto">
                  <div className="space-y-4 mb-6">
                    {results.classifications.map((result) => (
                      <div key={result.label} className="flex items-center">
                        <div className="w-32 text-white">{result.label}</div>
                        <div className="w-full bg-gray-700 rounded-full h-4 mx-3">
                          <div
                            className="bg-blue-500 h-4 rounded-full"
                            style={{ width: `${(result.score * 100).toFixed(1)}%` }}
                          ></div>
                        </div>
                        <div className="w-16 text-white text-right">
                          {(result.score * 100).toFixed(1)}%
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Most Likely + Top 2 */}
                  <div className="space-y-3 border-t border-gray-600 pt-6">
                    <p className="text-green-400 text-lg">
                      <strong>Most Likely Class:</strong>{' '}
                      {predictedClass.label} ({(predictedClass.score * 100).toFixed(2)}%)
                    </p>
                    {topTwoClasses[1] && (
                      <p className="text-white text-base">
                        <strong>Top 2:</strong> {topTwoClasses[0].label},{' '}
                        {topTwoClasses[1].label}
                      </p>
                    )}
                    <p className="text-green-400 text-lg">
                      <strong>Confidence Margin:</strong>{' '}
                      {confidenceMargin.toFixed(2)}%
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* === Full Width Chart === */}
          <div className="mt-12">
            <h3 className="text-white text-2xl font-semibold mb-4">
              Confidence Score Distribution
            </h3>
            <div className="bg-transparent w-full h-[300px]">
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
                  <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none' }} />
                  <Legend />
                  <Bar dataKey="score" fill="#38bdf8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



