export type QuestionType = 'beck' | 'scid' | 'info';

export interface BeckOption {
  text: string;
  score: number;
}

export interface Question {
  id: string;
  type: QuestionType;
  text?: string;
  options?: BeckOption[];
  diagnosis?: string;
  requiresDate?: boolean;
  requiresNote?: boolean;
  yesNext?: string;
  noNext?: string;
  nextQuestion?: string;
  infoText?: string;
  evaluateAfter?: boolean;
  evaluation?: {
    condition: string;
    yesNext: string;
    noNext: string;
  };
}

export interface QuestionState {
  currentQuestionId: string;
  previousQuestions: string[];
  answers: Record<string, {
    score?: number;
    answer?: boolean;
    note?: string;
    date?: string;
  }>;
  diagnoses: string[];
  notes: Record<string, string>;
}