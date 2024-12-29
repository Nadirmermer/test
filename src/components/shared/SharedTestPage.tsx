import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePatientStore } from '../../stores/patientStore';
import QuestionCard from '../QuestionCard';
import { useQuestionLogic } from '../../hooks/useQuestionLogic';
import { useApp } from '../../contexts/AppContext';
import { tests } from '../../data/tests';

export function SharedTestPage() {
  const { token } = useParams();
  const navigate = useNavigate();
  const { patients } = usePatientStore();
  const { setSelectedTest } = useApp();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentQuestion, handleAnswer, handleBack, isComplete, state } =
    useQuestionLogic();

  useEffect(() => {
    // Token kontrolü
    if (!token) {
      setError('Geçersiz test bağlantısı');
      setIsLoading(false);
      return;
    }

    try {
      // Token'a ait testi bul
      const patient = patients.find((p) =>
        p.sharedTests?.some((t) => t.token === token)
      );
      const sharedTest = patient?.sharedTests?.find((t) => t.token === token);

      if (!sharedTest) {
        setError('Test bulunamadı');
        setIsLoading(false);
        return;
      }

      if (sharedTest.isCompleted) {
        setError('Bu test daha önce tamamlanmış');
        setIsLoading(false);
        return;
      }

      // Test tipini ayarla
      const test = tests.find((t) => t.id === sharedTest.testType);
      if (test) {
        setSelectedTest(test.id);
      } else {
        setError('Test tipi bulunamadı');
      }

      setIsLoading(false);
    } catch (err) {
      console.error('Error loading shared test:', err);
      setError('Test yüklenirken bir hata oluştu');
      setIsLoading(false);
    }
  }, [token, patients, setSelectedTest]);

  // Test tamamlandığında
  useEffect(() => {
    if (
      isComplete &&
      token &&
      state.answers &&
      Object.keys(state.answers).length > 0
    ) {
      const patient = patients.find((p) =>
        p.sharedTests?.some((t) => t.token === token)
      );
      const sharedTest = patient?.sharedTests?.find((t) => t.token === token);

      if (patient && sharedTest) {
        // Test sonuçlarını kaydet
        const updatedSharedTests = patient.sharedTests?.map((t) => {
          if (t.token === token) {
            return {
              ...t,
              isCompleted: true,
              completedAt: new Date().toISOString(),
              results: {
                answers: state.answers,
                diagnosis: state.diagnoses,
              },
            };
          }
          return t;
        });

        // Test sonucunu test geçmişine ekle
        const testResult = {
          id: crypto.randomUUID(),
          testType: sharedTest.testType,
          answers: state.answers,
          diagnosis: state.diagnoses,
          date: new Date().toISOString(),
        };

        const updatedTestResults = [...(patient.testResults || []), testResult];

        // Hasta bilgilerini güncelle
        usePatientStore.getState().updatePatient(patient.id, {
          sharedTests: updatedSharedTests,
          testResults: updatedTestResults,
        });
      }
    }
  }, [isComplete, token, state, patients]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>
          <button
            onClick={() => window.close()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Pencereyi Kapat
          </button>
        </div>
      </div>
    );
  }

  if (isComplete && state.answers && Object.keys(state.answers).length > 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
            Test Başarıyla Tamamlandı
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Teşekkür ederiz. Sonuçlarınız ruh sağlığı uzmanınıza iletilmiştir.
          </p>
          <button
            onClick={() => window.close()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Pencereyi Kapat
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {currentQuestion && (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
            onBack={handleBack}
            canGoBack={false}
          />
        )}
      </div>
    </div>
  );
}
