'use client';

import FileUpload from '@/components/FileUpload';
import ProtectedRoute from '@/components/ProtectedRoute';

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 gap-8">
          <FileUpload />
          {/* Additional dashboard components can be added here */}
        </div>
      </div>
    </ProtectedRoute>
  );
}