import { QuestionState } from '../../types/questions';
import { DiagnosisResult, DiagnosisRule } from './types';
import { CriteriaEvaluator } from './criteriaEvaluator';
import { scidRules } from '../../data/assessments/scid-5/rules';

export class DiagnosisManager {
  private evaluator: CriteriaEvaluator;
  private currentDiagnoses: Set<string> = new Set();

  constructor(answers: QuestionState['answers']) {
    this.evaluator = new CriteriaEvaluator(answers);
  }

  // Tüm tanı kurallarını değerlendir
  evaluateAllRules(): DiagnosisResult[] {
    const results: DiagnosisResult[] = [];

    for (const rule of scidRules) {
      const evaluation = this.evaluator.evaluateDiagnosisRule(rule);
      
      if (evaluation.isMet && !this.currentDiagnoses.has(rule.diagnosis)) {
        const severity = evaluation.score !== undefined ? 
          this.evaluator.evaluateSeverity(evaluation.score, rule) : 
          undefined;

        results.push({
          diagnosis: rule.diagnosis,
          severity
        });

        this.currentDiagnoses.add(rule.diagnosis);
      }
    }

    return results;
  }

  // Belirli bir modül için tanıları değerlendir
  evaluateModuleDiagnoses(moduleId: string): DiagnosisResult[] {
    return this.evaluateAllRules().filter(result => 
      result.diagnosis.startsWith(moduleId)
    );
  }
}