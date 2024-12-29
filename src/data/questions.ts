import { beckAnxietyQuestions } from './assessments/beck-anxiety/questions';
import { beckDepressionQuestions } from './assessments/beck-depression/questions';
import { scid5cvQuestions } from './assessments/scid-5/questions';

export const questions = {
  ...beckAnxietyQuestions,
  ...beckDepressionQuestions,
  ...scid5cvQuestions,
};
