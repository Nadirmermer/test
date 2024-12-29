import { QuestionState } from '../types/questions';
import { scidEvaluationRules } from '../data/assessments/scid-5/evaluationRules';

export interface DiagnosisResult {
  diagnosis: string;
  severity?: string;
  additionalInfo?: string;
}

// SCID-5 tanı değerlendirmesi
export function evaluateScidDiagnosis(state: QuestionState): DiagnosisResult[] {
  const diagnoses: DiagnosisResult[] = [];
  const { answers } = state;

  // Her bir değerlendirme kuralını kontrol et
  Object.entries(scidEvaluationRules).forEach(([_, rule]) => {
    // Kural koşulunu kontrol et
    if (rule.condition(answers)) {
      // Eğer tanı varsa ekle
      if (rule.diagnosis) {
        diagnoses.push({ diagnosis: rule.diagnosis });
      }
    }
  });

  return diagnoses;
}