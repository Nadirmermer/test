import { QuestionState } from '../../types/questions';
import { scidCriteria, DiagnosisCriteria } from '../../data/assessments/scid-5/criteria';
import { beckSuicideCriteria } from '../../data/assessments/beck-suicide/criteria';

export interface DiagnosisResult {
  diagnosis: string;
  severity?: string;
  additionalInfo?: string;
}

// Çoklu soru kriterlerini değerlendir
function evaluateMultipleQuestions(questions: string[], answers: QuestionState['answers']): boolean {
  return questions.some(q => answers[q]?.answer === true);
}

// Tek soru kriterini değerlendir
function evaluateSingleQuestion(question: string, answers: QuestionState['answers']): boolean {
  return answers[question]?.answer === true;
}

// Şiddet değerlendirmesi yap
function evaluateSeverity(criteria: string[], answers: QuestionState['answers']): string | undefined {
  const metCriteriaCount = criteria.filter(q => answers[q]?.answer === true).length;
  
  if (metCriteriaCount >= 6) return "Ağır";
  if (metCriteriaCount >= 4) return "Orta derecede";
  if (metCriteriaCount >= 2) return "Ağır olmayan";
  return undefined;
}

// Tanı kriterini değerlendir
function evaluateCriteria(disorder: DiagnosisCriteria, answers: QuestionState['answers']): DiagnosisResult | null {
  const { question, diagnosis } = disorder;
  if (evaluateSingleQuestion(question, answers)) {
    return { diagnosis };
  }
  return null;
}

// Ana değerlendirme fonksiyonu
export function evaluateScidDiagnosis(state: QuestionState): DiagnosisResult[] {
  const diagnoses: DiagnosisResult[] = [];
  const answers = state.answers;

  // Her kategoriyi değerlendir
  Object.values(scidCriteria).forEach(category => {
    Object.values(category).forEach(disorder => {
      if ('diagnosis' in disorder) {
        const result = evaluateCriteria(disorder, answers);
        if (result) diagnoses.push(result);
      } else {
        // Alt kategorileri değerlendir (örn: bipolar1.manic.current)
        Object.values(disorder).forEach(subDisorder => {
          if ('diagnosis' in subDisorder) {
            const result = evaluateCriteria(subDisorder, answers);
            if (result) diagnoses.push(result);
          }
        });
      }
    });
  });

  // Beck Suicide kategorisini değerlendir
  Object.values(beckSuicideCriteria).forEach(category => {
    Object.values(category).forEach(disorder => {
      if ('diagnosis' in disorder) {
        const result = evaluateCriteria(disorder, answers);
        if (result) diagnoses.push(result);
      }
    });
  });

  return diagnoses;
}