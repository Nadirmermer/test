import { beckAnxietyCriteria } from '../data/assessments/beck-anxiety/criteria';
import { beckDepressionCriteria } from '../data/assessments/beck-depression/criteria';
import { QuestionState } from '../types/questions';

export function evaluateBeckTest(state: QuestionState, testType: string): string[] {
  const diagnoses: string[] = [];
  
  // Calculate total score
  const totalScore = Object.values(state.answers).reduce((sum, answer) => {
    return sum + (answer.score || 0);
  }, 0);

  if (testType === 'beck-anxiety') {
    const { scoring } = beckAnxietyCriteria;
    
    if (totalScore <= scoring.minimal.max) {
      diagnoses.push(scoring.minimal.description);
    } else if (totalScore <= scoring.mild.max) {
      diagnoses.push(scoring.mild.description);
    } else if (totalScore <= scoring.moderate.max) {
      diagnoses.push(scoring.moderate.description);
    } else {
      diagnoses.push(scoring.severe.description);
    }
  } else if (testType === 'beck-depression') {
    const { scoring } = beckDepressionCriteria;
    
    if (totalScore <= scoring.minimal.max) {
      diagnoses.push(scoring.minimal.description);
    } else if (totalScore <= scoring.mild.max) {
      diagnoses.push(scoring.mild.description);
    } else if (totalScore <= scoring.moderate.max) {
      diagnoses.push(scoring.moderate.description);
    } else {
      diagnoses.push(scoring.severe.description);
    }
  }

  return diagnoses;
}