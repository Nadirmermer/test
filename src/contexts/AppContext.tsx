import React, { createContext, useContext, useState, useEffect } from 'react';
import { QuestionState } from '../types/questions';
import { PatientInfo } from '../components/PatientForm';
import { tests } from '../data/tests';

interface AppContextType {
  state: QuestionState;
  setState: React.Dispatch<React.SetStateAction<QuestionState>>;
  patientInfo: PatientInfo | null;
  setPatientInfo: React.Dispatch<React.SetStateAction<PatientInfo | null>>;
  selectedTest: string | null;
  setSelectedTest: React.Dispatch<React.SetStateAction<string | null>>;
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  fontSize: number;
  setFontSize: React.Dispatch<React.SetStateAction<number>>;
  handleReset: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

const initialState: QuestionState = {
  currentQuestionId: '',
  previousQuestions: [],
  answers: {},
  diagnoses: [],
  notes: {}
};

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<QuestionState>(initialState);
  const [patientInfo, setPatientInfo] = useState<PatientInfo | null>(null);
  const [selectedTest, setSelectedTest] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(() => 
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => setIsDark(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    document.documentElement.style.setProperty('--base-font-size', `${fontSize}px`);
    document.documentElement.style.fontSize = 'var(--base-font-size)';
  }, [fontSize]);

  const handleReset = () => {
    const test = tests.find(t => t.id === selectedTest);
    if (test) {
      setState({
        ...initialState,
        currentQuestionId: test.startQuestionId
      });
    } else {
      setState(initialState);
      setSelectedTest(null);
    }
  };

  return (
    <AppContext.Provider value={{
      state,
      setState,
      patientInfo,
      setPatientInfo,
      selectedTest,
      setSelectedTest,
      isDark,
      setIsDark,
      fontSize,
      setFontSize,
      handleReset
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}