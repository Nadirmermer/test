import { Question } from '../../../types/questions';

export const beckSuicideIntro = `
Aşağıda, kişilerin intiharla ilgili düşünce ve davranışlarını ifade eden bazı cümleler verilmiştir. 
Lütfen her ifadeyi dikkatle okuyunuz ve size en uygun olan seçeneği işaretleyiniz.
`;

export const beckSuicideQuestions: Record<string, Question> = {
  Q1: {
    id: 'Q1',
    type: 'beck',
    text: 'Yaşama arzusu',
    options: [
      { text: 'Orta veya şiddetli', score: 0 },
      { text: 'Zayıf', score: 1 },
      { text: 'Yok', score: 2 }
    ],
    infoText: beckSuicideIntro,
    nextQuestion: 'Q2'
  },
  Q2: {
    id: 'Q2',
    type: 'beck',
    text: 'Ölme arzusu',
    options: [
      { text: 'Yok', score: 0 },
      { text: 'Zayıf', score: 1 },
      { text: 'Orta veya şiddetli', score: 2 }
    ],
    nextQuestion: 'Q3'
  },
  Q3: {
    id: 'Q3',
    type: 'beck',
    text: 'Yaşam / Ölüm için nedenler',
    options: [
      { text: 'Yaşam ölümden ağır basıyor', score: 0 },
      { text: 'Yaşam ve ölüm için nedenler eşit', score: 1 },
      { text: 'Ölmek yaşamaktan ağır basıyor', score: 2 }
    ],
    nextQuestion: 'Q4'
  },
  Q4: {
    id: 'Q4',
    type: 'beck',
    text: 'Aktif intihar girişiminde bulunma arzusu',
    options: [
      { text: 'Yok', score: 0 },
      { text: 'Zayıf', score: 1 },
      { text: 'Orta veya şiddetli', score: 2 }
    ],
    nextQuestion: 'Q5'
  },
  Q5: {
    id: 'Q5',
    type: 'beck',
    text: 'Pasif intihar girişimi',
    options: [
      { text: 'Yaşamını kurtarmak için gerekli önlemleri alıyor', score: 0 },
      { text: 'Yaşamayı ölmeyi şansa bırakıyor', score: 1 },
      { text: 'Hayatını korumaktan ve sürdürmekten kaçıyor', score: 2 }
    ],
    nextQuestion: 'Q6'
  },
  Q6: {
    id: 'Q6',
    type: 'beck',
    text: 'İntihar düşüncesinin/isteğinin süresi',
    options: [
      { text: 'Kısa ve geçici dönemler', score: 0 },
      { text: 'Uzun dönemler', score: 1 },
      { text: 'Kesintisiz veya neredeyse sürekli', score: 2 }
    ],
    nextQuestion: 'Q7'
  },
  Q7: {
    id: 'Q7',
    type: 'beck',
    text: 'İntihar düşüncesinin sıklığı',
    options: [
      { text: 'Nadiren', score: 0 },
      { text: 'Aralıklı', score: 1 },
      { text: 'Kalıcı ya da sürekli', score: 2 }
    ],
    nextQuestion: 'Q8'
  },
  Q8: {
    id: 'Q8',
    type: 'beck',
    text: 'Düşünce ve isteğe karşı tutum',
    options: [
      { text: 'Kabul etmeyen', score: 0 },
      { text: 'Kararsız, ilgisiz', score: 1 },
      { text: 'Kabul eden', score: 2 }
    ],
    nextQuestion: 'Q9'
  },
  Q9: {
    id: 'Q9',
    type: 'beck',
    text: 'İntihar eylemi ve eylem isteği üzerinde kontrol',
    options: [
      { text: 'Kontrol duygusu var', score: 0 },
      { text: 'Kontrolden emin değil', score: 1 },
      { text: 'Kontrol duygusu yok', score: 2 }
    ],
    nextQuestion: 'Q10'
  },
  Q10: {
    id: 'Q10',
    type: 'beck',
    text: 'Aktif girişimden caydırıcılar (örnek; aile, din, geri dönüşsüzlük)',
    options: [
      { text: 'Caydırıcı nedeniyle girişimde bulunmama', score: 0 },
      { text: 'Caydırıcılar hakkında biraz endişe', score: 1 },
      { text: 'Caydırıcılar hakkında hiç ya da çok az endişe', score: 2 }
    ],
    nextQuestion: 'Q11'
  },
  Q11: {
    id: 'Q11',
    type: 'beck',
    text: 'Düşünülen girişim için neden',
    options: [
      { text: 'Çevreyi etkilemek, dikkat çekmek ve ya intikam', score: 0 },
      { text: 'Kaçma ve etkileme isteğinin birleşimi', score: 1 },
      { text: 'Problem çözmeyi bitirmek için kaçma', score: 2 }
    ],
    nextQuestion: 'Q12'
  },
  Q12: {
    id: 'Q12',
    type: 'beck',
    text: 'Yöntem: Düşünülen girişimin özgüllük ve planlaması',
    options: [
      { text: 'Üzerinde düşünülmemiş', score: 0 },
      { text: 'Düşünülmüş ama detaylar çalışılmamış', score: 1 },
      { text: 'Detaylar çalışılmış ve çok iyi planlanmış', score: 2 }
    ],
    nextQuestion: 'Q13'
  },
  Q13: {
    id: 'Q13',
    type: 'beck',
    text: 'Yöntem: Düşünülen girişim için uygunluk ve fırsat',
    options: [
      { text: 'Yönteme ulaşılamıyor ve ya fırsat yok', score: 0 },
      { text: 'Yöntem zaman ve çaba istiyor, fırsat hazır değil', score: 1 },
      { text: 'Yöntem ve fırsat erişilebilir', score: 2 },
      { text: 'Yöntem ve fırsat gelecekte erişilebilir', score: 2 }
    ],
    nextQuestion: 'Q14'
  },
  Q14: {
    id: 'Q14',
    type: 'beck',
    text: 'Girişimi gerçekleştirmek için ‘kapasite’ hissi',
    options: [
      { text: 'Cesaret yok, çok zayıf, yetersiz', score: 0 },
      { text: 'Cesaret ve yeterlilikten emin değil', score: 1 },
      { text: 'Cesaret ve yeterlilikten emin', score: 2 }
    ],
    nextQuestion: 'Q15'
  },
  Q15: {
    id: 'Q15',
    type: 'beck',
    text: 'Güncel girişim beklentisi/ öngörüsü',
    options: [
      { text: 'Yok', score: 0 },
      { text: 'Emin değil, belirsiz', score: 1 },
      { text: 'Evet', score: 2 }
    ],
    nextQuestion: 'Q16'
  },
  Q16: {
    id: 'Q16',
    type: 'beck',
    text: 'Düşünülen girişim için güncel hazırlık',
    options: [
      { text: 'Yok', score: 0 },
      { text: 'Kısmen', score: 1 },
      { text: 'Tam', score: 2 }
    ],
    nextQuestion: 'Q17'
  },
  Q17: {
    id: 'Q17',
    type: 'beck',
    text: 'İntihar Notu',
    options: [
      { text: 'Yok', score: 0 },
      { text: 'Başlamış ama tamamlamamış, sadece düşünce', score: 1 },
      { text: 'Tamamlamış', score: 2 }
    ],
    nextQuestion: 'Q18'
  },
  Q18: {
    id: 'Q18',
    type: 'beck',
    text: 'Ölüm beklentisi içinde yapılan son eylemler',
    options: [
      { text: 'Yok', score: 0 },
      { text: 'Düşünmüş ve bazı düzenlemeler yapmış', score: 1 },
      { text: 'Kesin planlar ya da düzenlemeler yapmış', score: 2 }
    ],
    nextQuestion: 'Q19'
  },
  Q19: {
    id: 'Q19',
    type: 'beck',
    text: 'Tasarlanan girişimin gizlenmesi ya da aldatıcı bir tavır sergilenmesi',
    options: [
      { text: 'Tasarıları açıkça belli', score: 0 },
      { text: 'Açıklamayı erteliyor', score: 1 },
      { text: 'Yalan söylemeye, aldatmaya, gizli tutmaya çalışma', score: 2 }
    ],
    nextQuestion: undefined // Son soru
  }
};