import React from 'react';
import { Document, Page, Font } from '@react-pdf/renderer';
import { DiagnosisResult } from '../../diagnosis';
import { styles } from '../styles';
import { ReportHeader } from '../components/ReportHeader';
import { DiagnosisSection } from '../components/DiagnosisSection';

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

export function createShortReport(patientName: string, diagnoses: DiagnosisResult[]) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <ReportHeader
          title="SCID-5 Kısa Değerlendirme Raporu"
          patientName={patientName}
        />
        <DiagnosisSection diagnoses={diagnoses} />
      </Page>
    </Document>
  );
}