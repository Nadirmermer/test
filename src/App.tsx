import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './contexts/AppContext';
import { AppHeader } from './components/AppHeader';
import { MainContent } from './components/MainContent';
import { PatientSelector } from './components/PatientSelector';
import { PatientList } from './components/patient/PatientList';
import { AnamnesisForm } from './components/patient/AnamnesisForm';
import { PatientTestHistory } from './components/patient/PatientTestHistory';
import { TestSelector } from './components/TestSelector';
import { SharedTestPage } from './components/shared/SharedTestPage';

export default function App() {
  return (
    <Router>
      <AppProvider>
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
            <AppHeader />
            <Routes>
              <Route path="/" element={<PatientSelector />} />
              <Route path="/patients" element={<PatientList />} />
              <Route path="/patients/new" element={<AnamnesisForm />} />
              <Route path="/patients/:id/anamnesis" element={<AnamnesisForm />} />
              <Route path="/patients/:id/tests" element={<TestSelector />} />
              <Route path="/patients/:id/test/:testId" element={<MainContent />} />
              <Route path="/patients/:id/reports" element={<PatientTestHistory />} />
              <Route path="/shared-test/:token" element={<SharedTestPage />} />
            </Routes>
          </div>
        </div>
      </AppProvider>
    </Router>
  );
}