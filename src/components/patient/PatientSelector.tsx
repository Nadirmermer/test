import React from 'react';
import { Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function PatientSelector() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-sm w-full px-4">
        <button
          onClick={() => navigate('/patients')}
          className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
        >
          <Users className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            Mevcut Danışanlar
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center">
            Kayıtlı danışanları görüntüleyin ve değerlendirmeleri yönetin
          </p>
        </button>
      </div>
    </div>
  );
}
