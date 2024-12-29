import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from '../styles';

interface ReportHeaderProps {
  title: string;
  patientName: string;
}

export const ReportHeader: React.FC<ReportHeaderProps> = ({ title, patientName }) => (
  <>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.section}>
      <Text style={styles.text}>Hasta: {patientName}</Text>
      <Text style={styles.text}>
        Tarih: {new Date().toLocaleDateString('tr-TR')}
      </Text>
    </View>
  </>
);