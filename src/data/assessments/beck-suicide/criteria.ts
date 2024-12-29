export const beckSuicideCriteria = {
  sections: {
    attitudeTowardsLifeAndDeath: {
      questions: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      description: 'Yaşam ve Ölüme Dair Tutumun Özellikleri',
    },
    suicidalThoughtsAndDesires: {
      questions: ['Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11'],
      description: 'İntihar Düşüncesi ve Arzusunun Özellikleri',
    },
    plannedAttemptCharacteristics: {
      questions: ['Q12', 'Q13', 'Q14', 'Q15'],
      description: 'Tasarlanan Girişimin Özellikleri',
    },
    plannedAttemptExecution: {
      questions: ['Q16', 'Q17', 'Q18', 'Q19'],
      description: 'Tasarlanan Girişimin Gerçekleştirilmesi',
    },
  },
  scoring: {
    min: 0,
    max: 38,
    description: 'Puanın yüksek olması intihar düşüncesinin belirgin ve ciddi olması anlamına gelmektedir.',
  },
  notes: [
    'Ölçekten toplam alınan puan tüm maddelerden alınan puanların aritmetik toplamı ile elde edilir.',
    'Arka plan faktörleri genel değerlendirmeye alınmamaktadır.',
  ],
};