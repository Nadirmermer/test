import { useEffect } from 'react';
import { useApp } from '../contexts/AppContext';
import { evaluateBeckTest } from '../utils/testEvaluation';
import { evaluateScidDiagnosis } from '../utils/diagnosis';
import { QuestionState } from '../types/questions';

export function useDiagnosisEvaluation(isComplete: boolean) {
  const { state, setState, selectedTest } = useApp();

  const evaluateDiagnosis = (state: QuestionState, testType: string) => {
    if (testType?.startsWith('beck')) {
      return evaluateBeckTest(state, testType);
    } else {
      return evaluateScidDiagnosis(state).map(d => d.diagnosis);
    }
  };

  useEffect(() => {
    if (isComplete && state.diagnoses.length === 0 && selectedTest) {
      setState(prev => ({
        ...prev,
        diagnoses: evaluateDiagnosis(prev, selectedTest)
      }));
    }
  }, [isComplete, state.diagnoses.length, selectedTest]);

  return { evaluateDiagnosis };
}