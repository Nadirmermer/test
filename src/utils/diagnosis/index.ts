import { QuestionState } from '../../types/questions';
import { DiagnosisResult } from './types';
import { DiagnosisManager } from './diagnosisManager';

export function evaluateScidDiagnosis(state: QuestionState): DiagnosisResult[] {
  const manager = new DiagnosisManager(state.answers);
  return manager.evaluateAllRules();
}