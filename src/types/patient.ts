import { Test } from './tests';

export interface Appointment {
  id: string;
  patientId: string;
  date: string; // ISO string
  time: string; // HH:mm format
  duration: number; // minutes
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  reminderSent: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface SharedTest {
  id: string;
  testType: string;
  patientId: string;
  token: string;
  isCompleted: boolean;
  createdAt: string;
  completedAt?: string;
  results?: {
    answers: Record<string, any>;
    diagnosis?: string[];
  };
}

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: 'male' | 'female' | 'other';
  phone: string;
  email: string;
  anamnesis?: {
    currentIssues: string;
    age: string;
    livingArrangement: string;
    occupation: string;
    workSchedule: string;
    workDetails: string;
    disabilityStatus: string;
    unemploymentHistory: string;
    presentIllness: string;
    lifeImpact: string;
    selfPerception: string;
    treatmentHistory: {
      treatmentPurpose: string;
      previousTreatments: string;
      hospitalizations: string;
      hospitalizationReason: string;
      treatments: Array<{
        date: string;
        diagnosis: string;
        treatmentAndOutcome: string;
      }>;
    };
    healthAndMental: {
      generalHealth: string;
      hospitalization: string;
      medications: string;
      medicationDetails: string;
      suicidalThoughts: string;
      suicidalPlanning: string;
      suicidalIntent: string;
      suicideAttempts: string;
      attemptDetails: string;
      severityAssessment: string;
      currentProblems: string;
      emotionalState: string;
      recentActivities: string;
      socialRelations: string;
      livingArrangement: string;
      substanceUse: string;
    };
  };
  testResults?: Test[];
  sharedTests?: SharedTest[];
  appointments?: Appointment[];
  createdAt: string;
  updatedAt: string;
}