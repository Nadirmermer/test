import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PersonalInfoSection } from './PersonalInfoSection';
import { AnamnesisSection } from './AnamnesisSection';
import { TreatmentHistorySection } from './TreatmentHistorySection';
import { HealthAndMentalSection } from './HealthAndMentalSection';
import { usePatientStore } from '../../stores/patientStore';
import { BackButton } from '../BackButton';

export function AnamnesisForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addPatient, getPatient, updatePatient } = usePatientStore();

  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    phone: '',
    email: '',
    gender: '',
  });

  const [anamnesisData, setAnamnesisData] = useState({
    currentIssues: '',
    age: '',
    livingArrangement: '',
    occupation: '',
    workSchedule: '',
    workDetails: '',
    disabilityStatus: '',
    unemploymentHistory: '',
    presentIllness: '',
    lifeImpact: '',
    selfPerception: '',
  });

  const [treatmentHistory, setTreatmentHistory] = useState({
    treatmentPurpose: '',
    previousTreatments: '',
    hospitalizations: '',
    hospitalizationReason: '',
    treatments: [{ date: '', diagnosis: '', treatmentAndOutcome: '' }],
  });

  const [healthAndMental, setHealthAndMental] = useState({
    generalHealth: '',
    hospitalization: '',
    medications: '',
    medicationDetails: '',
    suicidalThoughts: '',
    suicidalPlanning: '',
    suicidalIntent: '',
    suicideAttempts: '',
    attemptDetails: '',
    severityAssessment: '',
    currentProblems: '',
    emotionalState: '',
    recentActivities: '',
    socialRelations: '',
    livingArrangement: '',
    substanceUse: '',
  });

  useEffect(() => {
    if (id) {
      const patient = getPatient(id);
      if (patient) {
        setPersonalInfo({
          fullName: `${patient.firstName} ${patient.lastName}`,
          phone: patient.phone,
          email: patient.email,
          gender: patient.gender,
        });

        if (patient.anamnesis) {
          setAnamnesisData(patient.anamnesis);
          setTreatmentHistory(patient.anamnesis.treatmentHistory);
          setHealthAndMental(patient.anamnesis.healthAndMental);
        }
      }
    }
  }, [id, getPatient]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!personalInfo.fullName.trim()) {
      alert('Lütfen ad soyad giriniz');
      return;
    }

    const nameParts = personalInfo.fullName.trim().split(' ');
    const lastName = nameParts.pop() || '';
    const firstName = nameParts.join(' ');

    const patientData = {
      firstName,
      lastName,
      birthDate: new Date().toISOString(),
      gender: personalInfo.gender as 'male' | 'female' | 'other',
      phone: personalInfo.phone,
      email: personalInfo.email,
      anamnesis: {
        ...anamnesisData,
        treatmentHistory,
        healthAndMental,
      },
    };

    if (id) {
      updatePatient(id, patientData);
    } else {
      addPatient(patientData);
    }

    navigate('/patients');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4 space-y-6">
      <div className="mb-6">
        <BackButton to="/patients" />
      </div>

      <PersonalInfoSection
        personalInfo={personalInfo}
        onUpdate={setPersonalInfo}
      />
      <AnamnesisSection data={anamnesisData} onUpdate={setAnamnesisData} />
      <TreatmentHistorySection
        data={treatmentHistory}
        onUpdate={setTreatmentHistory}
      />
      <HealthAndMentalSection
        data={healthAndMental}
        onUpdate={setHealthAndMental}
      />

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={() => navigate('/patients')}
          className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-red-600 dark:hover:bg-red-700 bg-red-500 text-white transition-colors"
        >
          İptal
        </button>
        <button
          type="submit"
          className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-blue-600 dark:hover:bg-blue-700 bg-blue-500 text-white transition-colors"
        >
          Kaydet
        </button>
      </div>
    </form>
  );
}
