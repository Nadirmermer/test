import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import { DiagnosisResult } from '../../diagnosis';
import { styles } from '../styles';
import { ReportHeader } from '../components/ReportHeader';
import { DiagnosisSection } from '../components/DiagnosisSection';

export function createShortReport(patientName: string, diagnoses: DiagnosisResult[]) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <ReportHeader title="SCID-5 Kısa Değerlendirme Raporu" patientName={patientName} />
        <DiagnosisSection diagnoses={diagnoses} />
      </Page>
    </Document>
  );
}