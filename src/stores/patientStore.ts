import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Patient } from '../types/patient';

interface PatientStore {
  patients: Patient[];
  addPatient: (patient: Omit<Patient, 'id' | 'createdAt' | 'updatedAt'>) => void;
  getPatient: (id: string) => Patient | undefined;
  updatePatient: (id: string, patient: Partial<Patient>) => void;
  deletePatient: (id: string) => void;
}

export const usePatientStore = create<PatientStore>()(
  persist(
    (set, get) => ({
      patients: [],
      addPatient: (patient) => {
        const newPatient: Patient = {
          ...patient,
          id: crypto.randomUUID(),
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        set((state) => ({
          patients: [...state.patients, newPatient],
        }));
      },
      getPatient: (id) => {
        return get().patients.find((p) => p.id === id);
      },
      updatePatient: (id, patient) => {
        set((state) => ({
          patients: state.patients.map((p) =>
            p.id === id
              ? { ...p, ...patient, updatedAt: new Date().toISOString() }
              : p
          ),
        }));
      },
      deletePatient: (id) => {
        set((state) => ({
          patients: state.patients.filter((p) => p.id !== id),
        }));
      },
    }),
    {
      name: 'patient-storage',
    }
  )
);