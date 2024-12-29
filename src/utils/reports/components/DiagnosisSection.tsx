import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from '../styles';
import { DiagnosisResult } from '../../diagnosis';

interface DiagnosisSectionProps {
  diagnoses: DiagnosisResult[];
}

export const DiagnosisSection: React.FC<DiagnosisSectionProps> = ({ diagnoses }) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>Tanılar:</Text>
    {diagnoses.map((diagnosis, index) => (
      <Text key={index} style={styles.diagnosis}>
        • {diagnosis.diagnosis}
        {diagnosis.severity ? ` (${diagnosis.severity})` : ''}
        {diagnosis.additionalInfo ? `\n  ${diagnosis.additionalInfo}` : ''}
      </Text>
    ))}
  </View>
);