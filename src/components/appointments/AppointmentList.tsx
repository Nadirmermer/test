import React from 'react';
import { useAppointmentStore } from '../../stores/appointmentStore';
import { usePatientStore } from '../../stores/patientStore';
import { Clock, Calendar, User, X, Check } from 'lucide-react';

export function AppointmentList({ selectedDate }: { selectedDate: string }) {
  const getAppointmentsByDate = useAppointmentStore(state => state.getAppointmentsByDate);
  const updateAppointment = useAppointmentStore(state => state.updateAppointment);
  const deleteAppointment = useAppointmentStore(state => state.deleteAppointment);
  const getPatient = usePatientStore(state => state.getPatient);

  const appointments = getAppointmentsByDate(selectedDate);

  const handleStatusChange = (appointmentId: string, status: 'completed' | 'cancelled') => {
    updateAppointment(appointmentId, { status });
  };

  const handleDelete = (appointmentId: string, name: string) => {
    if (window.confirm(`${name} isimli danışanın randevusunu silmek istediğinizden emin misiniz?`)) {
      deleteAppointment(appointmentId);
    }
  };

  if (appointments.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 dark:text-gray-400">
        Bu tarihte randevu bulunmamaktadır.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {appointments
        .sort((a, b) => a.time.localeCompare(b.time))
        .map(appointment => {
          const patient = getPatient(appointment.patientId);
          if (!patient) return null;

          return (
            <div
              key={appointment.id}
              className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {patient.firstName} {patient.lastName}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <Clock className="w-4 h-4" />
                    <span>{appointment.time}</span>
                    <span className="text-gray-400">•</span>
                    <span>{appointment.duration} dakika</span>
                  </div>
                  {appointment.notes && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {appointment.notes}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleStatusChange(appointment.id, 'completed')}
                    className="p-1 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-full text-green-600 dark:text-green-400"
                    title="Tamamlandı"
                  >
                    <Check className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(
                      appointment.id,
                      `${patient.firstName} ${patient.lastName}`
                    )}
                    className="p-1 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full text-red-600 dark:text-red-400"
                    title="Sil"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}