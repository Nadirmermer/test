import { pdf } from '@react-pdf/renderer';
import { QuestionState } from '../../types/questions';
import { evaluateScidDiagnosis } from '../diagnosis';
import { createShortReport } from './templates/ShortReport';
import { createDetailedReport } from './templates/DetailedReport';

export async function generateShortReport(
  state: QuestionState,
  patientName: string
) {
  const diagnoses = evaluateScidDiagnosis(state);
  return pdf(createShortReport(patientName, diagnoses));
}

export async function generateDetailedReport(
  state: QuestionState,
  patientName: string
) {
  const diagnoses = evaluateScidDiagnosis(state);
  return pdf(createDetailedReport(patientName, diagnoses, state.answers));
}