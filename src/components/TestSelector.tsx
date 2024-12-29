import React from 'react';
import { ClipboardList, Share2 } from 'lucide-react';
import { tests } from '../data/tests';
import { useApp } from '../contexts/AppContext';
import { useNavigate, useParams } from 'react-router-dom';
import { BackButton } from './BackButton';
import { ShareTestModal } from './patient/ShareTestModal';

export function TestSelector() {
  const [showShareModal, setShowShareModal] = React.useState(false);
  const { setSelectedTest, setState } = useApp();
  const navigate = useNavigate();
  const { id: patientId } = useParams();

  const handleTestSelect = (testId: string) => {
    const selectedTest = tests.find(test => test.id === testId);
    if (selectedTest) {
      setState({
        currentQuestionId: selectedTest.startQuestionId,
        previousQuestions: [],
        answers: {},
        diagnoses: [],
        notes: {}
      });
      setSelectedTest(testId);
      navigate(`/patients/${patientId}/test/${testId}`);
    }
  };

  return (
    <div className="min-h-[calc(100vh-12rem)]">
      <div className="mb-6">
        <BackButton to="/patients" />
      </div>

      <div className="flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              Değerlendirme Testleri
            </h2>
            <button
              onClick={() => setShowShareModal(true)}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              <Share2 className="w-5 h-5" />
              Test Paylaş
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tests.map(test => (
              <button
                key={test.id}
                onClick={() => handleTestSelect(test.id)}
                className="flex items-start gap-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all text-left group"
              >
                <ClipboardList className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {test.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {test.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {showShareModal && (
        <ShareTestModal
          patientId={patientId!}
          onClose={() => setShowShareModal(false)}
        />
      )}
    </div>
  );
}