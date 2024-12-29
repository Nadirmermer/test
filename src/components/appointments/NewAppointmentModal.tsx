import React, { useState } from 'react';
import { X, Mail, Phone, Check } from 'lucide-react';
import { tests } from '../../data/tests';
import { usePatientStore } from '../../stores/patientStore';
import { useAppointmentStore } from '../../stores/appointmentStore';

interface NewAppointmentModalProps {
  onClose: () => void;
  currentDate: Date;
}

export function NewAppointmentModal({ onClose, currentDate }: NewAppointmentModalProps) {
  const [selectedPatient, setSelectedPatient] = useState('');
  const [appointmentDate, setAppointmentDate] = useState(
    currentDate.toISOString().split('T')[0]
  );
  const [appointmentTime, setAppointmentTime] = useState('09:00');
  const [duration, setDuration] = useState(45);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);

  const { patients } = usePatientStore();
  const { getAppointmentsByDate, createAppointment } = useAppointmentStore();

  // Mevcut randevuları kontrol et
  const checkTimeSlotAvailable = (date: string, time: string, duration: number) => {
    const appointments = getAppointmentsByDate(date);
    const newStart = new Date(`${date}T${time}`);
    const newEnd = new Date(newStart.getTime() + duration * 60000);

    return !appointments.some(apt => {
      const aptStart = new Date(`${apt.date}T${apt.time}`);
      const aptEnd = new Date(aptStart.getTime() + apt.duration * 60000);
      
      return (
        (newStart >= aptStart && newStart < aptEnd) ||
        (newEnd > aptStart && newEnd <= aptEnd) ||
        (newStart <= aptStart && newEnd >= aptEnd)
      );
    });
  };

  // Kullanılabilir saatleri oluştur (09:00-17:00 arası)
  const getAvailableTimeSlots = () => {
    const slots = [];
    const start = 9;
    const end = 17;
    
    for (let hour = start; hour < end; hour++) {
      const time = `${hour.toString().padStart(2, '0')}:00`;
      if (checkTimeSlotAvailable(appointmentDate, time, duration)) {
        slots.push(time);
      }
    }
    
    return slots;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!selectedPatient || !appointmentDate || !appointmentTime) {
      setError('Lütfen tüm zorunlu alanları doldurun');
      return;
    }

    if (!checkTimeSlotAvailable(appointmentDate, appointmentTime, duration)) {
      setError('Seçilen zaman dilimi dolu');
      return;
    }

    try {
      createAppointment({
        patientId: selectedPatient,
        date: appointmentDate,
        time: appointmentTime,
        duration,
        notes,
        status: 'scheduled'
      });
      onClose();
    } catch (err) {
      setError('Randevu oluşturulurken bir hata oluştu');
    }
  };

  const availableTimeSlots = getAvailableTimeSlots();

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Yeni Randevu
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Danışan
            </label>
            <select
              value={selectedPatient}
              onChange={(e) => setSelectedPatient(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              required
            >
              <option value="">Danışan seçin</option>
              {patients.map(patient => (
                <option key={patient.id} value={patient.id}>
                  {patient.firstName} {patient.lastName}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Tarih
            </label>
            <input
              type="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Süre
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
            >
              <option value={45}>45 dakika</option>
              <option value={60}>60 dakika</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Saat
            </label>
            <select
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              required
            >
              <option value="">Saat seçin</option>
              {availableTimeSlots.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Notlar
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              rows={3}
              placeholder="Opsiyonel notlar..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Randevu Oluştur
          </button>
        </form>
      </div>
    </div>
  );
}