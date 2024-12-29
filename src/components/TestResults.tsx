import React from 'react';
import { useApp } from '../contexts/AppContext';
import { questions } from '../data/questions';
import { tests } from '../data/tests';
import { useTestResults } from '../hooks/useTestResults';
import { ScidReportButton } from './reports/ScidReportButton';

export function TestResults() {
  const { state, selectedTest } = useApp();
  const { hasAnswers, hasNotes, totalScore, handleComplete } = useTestResults();
  
  if (!selectedTest || !hasAnswers) {
    return null;
  }

  const test = tests.find(t => t.id === selectedTest);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        {test?.name || 'Bilinmeyen Test'} - Değerlendirme Raporu
      </h2>

      {totalScore !== null && (
        <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-gray-700 dark:text-gray-300">
            Toplam Puan: <span className="font-semibold">{totalScore}</span>
          </p>
        </div>
      )}

      {state.diagnoses.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2 dark:text-gray-200">
            {selectedTest?.startsWith('beck') ? 'Değerlendirme:' : 'Tespit Edilen Tanılar:'}
          </h3>
          <ul className="list-disc pl-5 space-y-1">
            {state.diagnoses.map((diagnosis, index) => (
              <li key={index} className="text-blue-600 dark:text-blue-400">{diagnosis}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedTest === 'scid-5-cv' && (
        <div className="mb-6">
          <ScidReportButton state={state} patientName="Test Hasta" />
        </div>
      )}

      {hasNotes && (
        <div className="mt-6">
          <h3 className="font-semibold mb-3 dark:text-gray-200">Notlar ve Gözlemler</h3>
          <div className="space-y-4">
            {Object.entries(state.answers)
              .filter(([_, answer]) => answer.note)
              .map(([id, answer]) => (
                <div key={id} className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {questions[id].text}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {answer.note}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      )}

      <div className="mt-8 flex justify-end">
        <button
          onClick={handleComplete}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Testi Tamamla ve Raporlara Git
        </button>
      </div>
    </div>
  );
}