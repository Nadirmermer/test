import { useApp } from '../contexts/AppContext';
import { questions } from '../data/questions';
import { Question } from '../types/questions';
import { useDiagnosisEvaluation } from './useDiagnosisEvaluation';

export function useQuestionLogic() {
  const { state, setState, selectedTest } = useApp();
  
  const currentQuestion: Question | undefined = state.currentQuestionId 
    ? questions[state.currentQuestionId] 
    : undefined;

  const isComplete = !currentQuestion?.nextQuestion && 
    !currentQuestion?.yesNext && 
    !currentQuestion?.noNext;

  const { evaluateDiagnosis } = useDiagnosisEvaluation(isComplete);

  const handleBack = () => {
    if (state.previousQuestions.length === 0) return;

    setState(prev => ({
      ...prev,
      currentQuestionId: prev.previousQuestions[prev.previousQuestions.length - 1],
      previousQuestions: prev.previousQuestions.slice(0, -1)
    }));
  };

  const handleAnswer = (value: number | boolean, note?: string) => {
    if (!currentQuestion || !selectedTest) return;

    setState((prev) => {
      const newState = {
        ...prev,
        previousQuestions: [...prev.previousQuestions, prev.currentQuestionId],
        answers: {
          ...prev.answers,
          [currentQuestion.id]: { 
            score: typeof value === 'number' ? value : undefined,
            answer: typeof value === 'boolean' ? value : undefined,
            note 
          }
        }
      };

      // SCID soruları için
      if (!currentQuestion.type || currentQuestion.type === 'scid') {
        newState.currentQuestionId = value ? 
          currentQuestion.yesNext || '' : 
          currentQuestion.noNext || '';
      } 
      // Beck testleri için
      else if (currentQuestion.type === 'beck') {
        newState.currentQuestionId = currentQuestion.nextQuestion || '';
      }
      
      // Son soru ise tanı değerlendirmesi yap
      if (!newState.currentQuestionId || 
          (!currentQuestion.nextQuestion && !currentQuestion.yesNext && !currentQuestion.noNext)) {
        newState.diagnoses = evaluateDiagnosis(newState, selectedTest);
      }

      return newState;
    });
  };

  return {
    currentQuestion,
    handleAnswer,
    handleBack,
    isComplete
  };
}