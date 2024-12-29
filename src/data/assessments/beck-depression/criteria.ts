export const beckDepressionCriteria = {
  scoring: {
    minimal: { min: 0, max: 13, description: 'Minimal depresyon' },
    mild: { min: 14, max: 19, description: 'Hafif depresyon' },
    moderate: { min: 20, max: 28, description: 'Orta şiddette depresyon' },
    severe: { min: 29, max: 63, description: 'Şiddetli depresyon' }
  },
  interpretation: [
    'Toplam puan 0-13: Minimal depresyon',
    'Toplam puan 14-19: Hafif depresyon',
    'Toplam puan 20-28: Orta şiddette depresyon',
    'Toplam puan 29-63: Şiddetli depresyon'
  ],
  notes: [
    'Beck Depresyon Envanteri, depresyon belirtilerinin şiddetini ölçmek için kullanılır.',
    'Son iki hafta içindeki belirtileri değerlendirir.',
    'Her madde 0-3 arası puanlanır.',
    'Toplam puan 0-63 arasında değişir.',
    'Klinik değerlendirme ile birlikte kullanılmalıdır.'
  ]
};