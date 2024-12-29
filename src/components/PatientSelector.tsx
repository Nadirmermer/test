import React from 'react';
import { Users, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppointmentCalendar } from './appointments/AppointmentCalendar';

export function PatientSelector() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-12rem)] p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Danışan Listesi */}
          <div className="w-full">
            <button
              onClick={() => navigate('/patients')}
              className="w-full h-full p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all flex flex-col items-center justify-center"
            >
              <Users className="w-16 h-16 text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Danışanlar
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                Yeni danışan ekleme ya da varolan danışanları yönetme
              </p>
            </button>
          </div>

          {/* Randevu Takvimi */}
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6">
            <AppointmentCalendar />
          </div>
        </div>
      </div>
    </div>
  );
}
