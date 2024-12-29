// SCID-5 Tanı Kuralları
import { DiagnosisRule } from '../../../utils/diagnosis/types';

export const scidRules: DiagnosisRule[] = [
  // Depresif Bozukluklar
  {
    id: 'major-depression-current',
    requiredCriteria: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'],
    minimumRequired: 5,
    diagnosis: 'Yeğin Depresyon Bozukluğu (O sıradaki)',
    severity: {
      mild: { min: 5, max: 6 },
      moderate: { min: 7, max: 8 },
      severe: { min: 9 }
    }
  },
  
  // Anksiyete Bozuklukları
  {
    id: 'panic-disorder',
    requiredCriteria: ['F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14'],
    minimumRequired: 4,
    diagnosis: 'Panik Bozukluğu'
  },
  
  // Diğer modüller için benzer kurallar eklenecek...
];