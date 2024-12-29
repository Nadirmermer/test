import { QuestionState } from '../../types/questions';
import { CriteriaResult, DiagnosisRule } from './types';

// Kriter değerlendirme fonksiyonları
export class CriteriaEvaluator {
  private answers: QuestionState['answers'];

  constructor(answers: QuestionState['answers']) {
    this.answers = answers;
  }

  // Belirli bir sorunun kriterini kontrol et
  evaluateSingleCriteria(questionId: string): boolean {
    return this.answers[questionId]?.answer === true;
  }

  // Birden fazla kriterden minimum sayıda karşılanması gereken durumu kontrol et
  evaluateMultipleCriteria(criteria: string[], minimumRequired: number): CriteriaResult {
    const metCriteria = criteria.filter(id => this.evaluateSingleCriteria(id));
    return {
      isMet: metCriteria.length >= minimumRequired,
      score: metCriteria.length
    };
  }

  // Tanı kuralını değerlendir
  evaluateDiagnosisRule(rule: DiagnosisRule): CriteriaResult {
    return this.evaluateMultipleCriteria(rule.requiredCriteria, rule.minimumRequired);
  }

  // Şiddet değerlendirmesi
  evaluateSeverity(score: number, rule: DiagnosisRule): string | undefined {
    if (!rule.severity) return undefined;

    if (score >= rule.severity.severe.min) return 'Ağır';
    if (score >= rule.severity.moderate.min && score <= rule.severity.moderate.max) return 'Orta';
    if (score >= rule.severity.mild.min && score <= rule.severity.mild.max) return 'Hafif';
    
    return undefined;
  }
}