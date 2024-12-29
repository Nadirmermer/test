export interface Test {
  id: string;
  name: string;
  description: string;
  startQuestionId: string;
}

export interface Patient {
  id: string;
  name: string;
  birthDate: string;
  phone: string;
  email: string;
  medicalHistory: string;
  medicationHistory: string;
  familyHistory: string;
  notes: string;
  tests: TestResult[];
}

export interface TestResult {
  testId: string;
  date: string;
  answers: Record<string, {
    answer: boolean;
    note?: string;
    date?: string;
  }>;
  diagnoses: string[];
}