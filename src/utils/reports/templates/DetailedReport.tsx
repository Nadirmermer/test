import React from 'react';
import { Document, Page, Font } from '@react-pdf/renderer';
import { QuestionState } from '../../../types/questions';
import { DiagnosisResult } from '../../diagnosis';
import { styles } from '../styles';
import { ReportHeader } from '../components/ReportHeader';
import { DiagnosisSection } from '../components/DiagnosisSection';
import { DetailedQuestionsSection } from '../components/DetailedQuestionsSection';

// Register a font that supports Turkish characters
Font.register({
  family: 'Helvetica',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf' },
    { 
      src: 'https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc4.ttf',
      fontWeight: 700 
    }
  ]
});

export function createDetailedReport(
  patientName: string, 
  diagnoses: DiagnosisResult[],
  answers: QuestionState['answers']
) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <ReportHeader
          title="SCID-5 Detaylı Değerlendirme Raporu"
          patientName={patientName}
        />
        <DiagnosisSection diagnoses={diagnoses} />
        <DetailedQuestionsSection answers={answers} />
      </Page>
    </Document>
  );
}