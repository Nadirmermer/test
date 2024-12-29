export const beckAnxietyCriteria = {
  scoring: {
    minimal: { min: 0, max: 7, description: 'Minimal düzeyde anksiyete' },
    mild: { min: 8, max: 15, description: 'Hafif düzeyde anksiyete' },
    moderate: { min: 16, max: 25, description: 'Orta düzeyde anksiyete' },
    severe: { min: 26, max: 63, description: 'Şiddetli düzeyde anksiyete' }
  },
  interpretation: [
    'Toplam puan 0-7 arası: Minimal düzeyde anksiyete',
    'Toplam puan 8-15 arası: Hafif düzeyde anksiyete',
    'Toplam puan 16-25 arası: Orta düzeyde anksiyete',
    'Toplam puan 26-63 arası: Şiddetli düzeyde anksiyete'
  ],
  notes: [
    'Beck Anksiyete Envanteri, anksiyete belirtilerinin şiddetini ölçmek için kullanılır.',
    'Son bir hafta içindeki belirtileri değerlendirir.',
    'Her madde 0-3 arası puanlanır.',
    'Toplam puan 0-63 arasında değişir.'
  ]
};