import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { usePatientStore } from '../../stores/patientStore';
import { useAppointmentStore } from '../../stores/appointmentStore';
import { NewAppointmentModal } from './NewAppointmentModal';
import { AppointmentList } from './AppointmentList';

export function AppointmentCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [showNewAppointment, setShowNewAppointment] = useState(false);
  const { patients } = usePatientStore();
  const getAppointmentsByDate = useAppointmentStore(state => state.getAppointmentsByDate);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;
  
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const previousMonthDays = Array.from({ length: adjustedFirstDay }, (_, i) => i);

  const monthNames = [
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ];

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  const previousMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const getDateString = (day: number) => {
    const date = new Date(Date.UTC(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day,
      0, 0, 0
    ));
    return date.toISOString().split('T')[0];
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const hasAppointments = (day: number) => {
    const dateString = getDateString(day);
    return getAppointmentsByDate(dateString).length > 0;
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={previousMonth}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h3>
          <button
            onClick={nextMonth}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <button
          onClick={() => setShowNewAppointment(true)}
          className="flex items-center gap-1 sm:gap-2 bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-3 py-1 rounded-lg text-sm transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Yeni Randevu</span>
          <span className="sm:hidden">Randevu</span>
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map(day => (
          <div
            key={`header-${day}`}
            className="text-center text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 py-1 sm:py-2"
          >
            {day}
          </div>
        ))}
        
        {previousMonthDays.map(day => (
          <div
            key={`prev-${day}-${currentDate.getMonth()}`}
            className="aspect-square p-1 sm:p-2 text-center text-gray-400 dark:text-gray-600"
          />
        ))}
        
        {days.map(day => {
          const dateString = getDateString(day);
          const isSelected = dateString === selectedDate;
          const today = isToday(day);
          const hasAppts = hasAppointments(day);

          return (
            <button
              key={`day-${day}-${currentDate.getMonth()}-${currentDate.getFullYear()}`}
              onClick={() => setSelectedDate(dateString)}
              className={`
                aspect-square p-1 sm:p-2 border rounded-lg relative text-sm sm:text-base
                ${isSelected ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'}
                ${today ? 'bg-blue-50 dark:bg-blue-900/20' : ''}
                text-gray-800 dark:text-gray-200
              `}
            >
              <div className="font-medium">{day}</div>
              {hasAppts && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 sm:mt-6">
        <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 sm:mb-4">
          {new Date(selectedDate).toLocaleDateString('tr-TR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })} Randevuları
        </h4>
        <AppointmentList selectedDate={selectedDate} />
      </div>

      {showNewAppointment && (
        <NewAppointmentModal
          patientId={patients[0]?.id}
          onClose={() => setShowNewAppointment(false)}
          currentDate={currentDate}
        />
      )}
    </div>
  );
}