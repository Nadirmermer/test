import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Appointment } from '../types/patient';
import { usePatientStore } from './patientStore';

interface AppointmentStore {
  createAppointment: (appointment: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt' | 'reminderSent'>) => void;
  updateAppointment: (id: string, appointment: Partial<Appointment>) => void;
  deleteAppointment: (id: string) => void;
  getAppointmentsByDate: (date: string) => Appointment[];
  getUpcomingAppointments: () => Appointment[];
  sendReminders: () => void;
}

export const useAppointmentStore = create<AppointmentStore>()(
  persist(
    (set, get) => ({
      createAppointment: (appointment) => {
        const { updatePatient, getPatient } = usePatientStore.getState();
        const patient = getPatient(appointment.patientId);

        if (!patient) return;

        const newAppointment: Appointment = {
          ...appointment,
          id: crypto.randomUUID(),
          reminderSent: false,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        const updatedAppointments = [...(patient.appointments || []), newAppointment];
        updatePatient(patient.id, { appointments: updatedAppointments });
      },

      updateAppointment: (id, appointmentUpdate) => {
        const { patients, updatePatient } = usePatientStore.getState();
        
        for (const patient of patients) {
          const appointment = patient.appointments?.find(a => a.id === id);
          if (appointment) {
            const updatedAppointments = patient.appointments?.map(a =>
              a.id === id
                ? { ...a, ...appointmentUpdate, updatedAt: new Date().toISOString() }
                : a
            );
            updatePatient(patient.id, { appointments: updatedAppointments });
            break;
          }
        }
      },

      deleteAppointment: (id) => {
        const { patients, updatePatient } = usePatientStore.getState();
        
        for (const patient of patients) {
          const appointment = patient.appointments?.find(a => a.id === id);
          if (appointment) {
            const updatedAppointments = patient.appointments?.filter(a => a.id !== id);
            updatePatient(patient.id, { appointments: updatedAppointments });
            break;
          }
        }
      },

      getAppointmentsByDate: (date) => {
        const { patients } = usePatientStore.getState();
        const appointments: Appointment[] = [];
        
        for (const patient of patients) {
          const patientAppointments = patient.appointments?.filter(a => 
            a.date === date && a.status !== 'cancelled'
          ) || [];
          appointments.push(...patientAppointments);
        }
        
        return appointments.sort((a, b) => a.time.localeCompare(b.time));
      },

      getUpcomingAppointments: () => {
        const { patients } = usePatientStore.getState();
        const now = new Date();
        const appointments: Appointment[] = [];
        
        for (const patient of patients) {
          const patientAppointments = patient.appointments?.filter(a => {
            const appointmentDate = new Date(`${a.date}T${a.time}`);
            return appointmentDate > now && a.status === 'scheduled';
          }) || [];
          appointments.push(...patientAppointments);
        }
        
        return appointments.sort((a, b) => {
          const dateA = new Date(`${a.date}T${a.time}`);
          const dateB = new Date(`${b.date}T${b.time}`);
          return dateA.getTime() - dateB.getTime();
        });
      },

      sendReminders: () => {
        const appointments = get().getUpcomingAppointments();
        const now = new Date();
        
        appointments.forEach(appointment => {
          const appointmentDate = new Date(`${appointment.date}T${appointment.time}`);
          const timeDiff = appointmentDate.getTime() - now.getTime();
          const hoursDiff = timeDiff / (1000 * 60 * 60);
          
          // 24 saat kala hatırlatma gönder
          if (hoursDiff <= 24 && !appointment.reminderSent) {
            const { getPatient } = usePatientStore.getState();
            const patient = getPatient(appointment.patientId);
            
            if (patient) {
              // Email gönderme simülasyonu
              console.log(`Sending reminder email to ${patient.email} for appointment on ${appointment.date} at ${appointment.time}`);
              
              // SMS gönderme simülasyonu
              console.log(`Sending reminder SMS to ${patient.phone} for appointment on ${appointment.date} at ${appointment.time}`);
              
              get().updateAppointment(appointment.id, { reminderSent: true });
            }
          }
        });
      }
    }),
    {
      name: 'appointment-storage'
    }
  )
);