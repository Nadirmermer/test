import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import { QuestionState } from '../../../types/questions';
import { DiagnosisResult } from '../../diagnosis';
import { styles } from '../styles';
import { ReportHeader } from '../components/ReportHeader';
import { DiagnosisSection } from '../components/DiagnosisSection';
import { DetailedQuestionsSection } from '../components/DetailedQuestionsSection';

export function createDetailedReport(
  patientName: string, 
  diagnoses: DiagnosisResult[],
  answers: QuestionState['answers']
) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <ReportHeader title="SCID-5 Detaylı Değerlendirme Raporu" patientName={patientName} />
        <DiagnosisSection diagnoses={diagnoses} />
        <DetailedQuestionsSection answers={answers} />
      </Page>
    </Document>
  );
}