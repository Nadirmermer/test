import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useApp } from '../contexts/AppContext';
import QuestionCard from './QuestionCard';
import { TestResults } from './TestResults';
import { useQuestionLogic } from '../hooks/useQuestionLogic';
import { BackButton } from './BackButton';

export function MainContent() {
  const { state, selectedTest, setSelectedTest } = useApp();
  const { id: patientId, testId } = useParams();
  const navigate = useNavigate();

  const { currentQuestion, handleAnswer, handleBack, isComplete } = useQuestionLogic();

  // Set selected test from URL parameter
  React.useEffect(() => {
    if (testId && testId !== selectedTest) {
      setSelectedTest(testId);
    }
  }, [testId, selectedTest, setSelectedTest]);

  // Redirect to patients list if no patient ID is provided
  React.useEffect(() => {
    if (!patientId) {
      navigate('/patients');
      return;
    }
  }, [patientId, navigate]);

  // Don't render anything while redirecting
  if (!patientId || !selectedTest) {
    return null;
  }

  if (isComplete && Object.keys(state.answers).length > 0) {
    return (
      <>
        <div className="mb-6">
          <BackButton to={`/patients/${patientId}/tests`} />
        </div>
        <TestResults />
      </>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="mb-6">
        <BackButton to={`/patients/${patientId}/tests`} />
      </div>
      {currentQuestion && (
        <QuestionCard
          question={currentQuestion}
          onAnswer={handleAnswer}
          onBack={handleBack}
          canGoBack={state.previousQuestions.length > 0}
        />
      )}
    </div>
  );
}