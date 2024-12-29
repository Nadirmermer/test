import { Question } from '../../../types/questions';

// Test başlangıç açıklaması
export const beckDepressionIntro = `
Aşağıda, kişilerin ruh durumlarını ifade ederken kullandıkları bazı cümleler verilmiştir.
Her madde bir çeşit ruh durumunu anlatmaktadır. Her maddede o durumun derecesini belirleyen
4 seçenek vardır. Lütfen bu seçenekleri dikkatle okuyunuz. Son bir hafta içindeki (şu an dahil)
kendi ruh durumunuzu göz önünde bulundurarak, size en uygun olan ifadeyi seçiniz.
`;

export const beckDepressionQuestions: Record<string, Question> = {
  BD1: {
    id: 'BD1',
    type: 'beck',
    options: [
      { text: 'Kendimi üzüntülü ve sıkıntılı hissetmiyorum', score: 0 },
      { text: 'Kendimi üzüntülü ve sıkıntılı hissediyorum', score: 1 },
      { text: 'Hep üzüntülü ve sıkıntılıyım. Bundan kurtulamıyorum', score: 2 },
      {
        text: 'O kadar üzüntülü ve sıkıntılıyım ki artık dayanamıyorum',
        score: 3,
      },
    ],
    nextQuestion: 'BD2',
    infoText: beckDepressionIntro,
  },
  BD2: {
    id: 'BD2',
    type: 'beck',
    options: [
      { text: 'Gelecek hakkında umutsuz ve karamsar değilim', score: 0 },
      { text: 'Gelecek hakkında karamsarım', score: 1 },
      { text: 'Gelecekten beklediğim hiçbir şey yok', score: 2 },
      {
        text: 'Geleceğim hakkında umutsuzum ve sanki hiçbir şey düzelmeyecekmiş gibi geliyor',
        score: 3,
      },
    ],
    nextQuestion: 'BD3',
  },
  BD3: {
    id: 'BD3',
    type: 'beck',
    options: [
      { text: 'Kendimi başarısız bir insan olarak görmüyorum', score: 0 },
      {
        text: 'Çevremdeki birçok kişiden daha çok başarısızlıklarım olmuş gibi hissediyorum',
        score: 1,
      },
      {
        text: 'Geçmişe baktığımda başarısızlıklarla dolu olduğunu görüyorum',
        score: 2,
      },
      { text: 'Kendimi tümüyle başarısız biri olarak görüyorum', score: 3 },
    ],
    nextQuestion: 'BD4',
  },
  BD4: {
    id: 'BD4',
    type: 'beck',
    options: [
      { text: ' Birçok şeyden eskisi kadar zevk alıyorum.', score: 0 },
      { text: 'Eskiden olduğu gibi her şeyden hoşlanmıyorum.', score: 1 },
      { text: 'Artık hiçbir şey bana tam anlamıyla zevk vermiyor.', score: 2 },
      { text: 'Her şeyden sıkılıyorum.', score: 3 },
    ],
    nextQuestion: 'BD5',
  },
  BD5: {
    id: 'BD5',
    type: 'beck',
    options: [
      { text: ' Kendimi herhangi bir şekilde suçlu hissetmiyorum.', score: 0 },
      { text: 'Kendimi zaman zaman suçlu hissediyorum.', score: 1 },
      { text: 'Çoğu zaman kendimi suçlu hissediyorum.', score: 2 },
      { text: 'Kendimi her zaman suçlu hissediyorum.', score: 3 },
    ],
    nextQuestion: 'BD6',
  },
  BD6: {
    id: 'BD6',
    type: 'beck',
    options: [
      { text: 'Bana cezalandırılmışım gibi gelmiyor.', score: 0 },
      { text: 'Cezalandırılabileceğimi hissediyorum.', score: 1 },
      { text: 'Cezalandırılmayı bekliyorum.', score: 2 },
      { text: 'Cezalandırıldığımı hissediyorum.', score: 3 },
    ],
    nextQuestion: 'BD7',
  },
  BD7: {
    id: 'BD7',
    type: 'beck',
    options: [
      { text: 'Kendimden memnunum.', score: 0 },
      { text: 'Kendi kendimden pek memnun değilim.', score: 1 },
      { text: 'Kendime çok kızıyorum.', score: 2 },
      { text: 'Kendimden nefret ediyorum.', score: 3 },
    ],
    nextQuestion: 'BD8',
  },
  BD8: {
    id: 'BD8',
    type: 'beck',
    options: [
      { text: 'Başkalarından daha kötü olduğumu sanmıyorum.', score: 0 },
      {
        text: 'Zayıf yanlarım veya hatalarım için kendi kendimi eleştiririm.',
        score: 1,
      },
      {
        text: 'Hatalarımdan dolayı ve her zaman kendimi kabahatli bulurum.',
        score: 2,
      },
      { text: 'Her aksilik karşısında kendimi hatalı bulurum.', score: 3 },
    ],
    nextQuestion: 'BD9',
  },
  BD9: {
    id: 'BD9',
    type: 'beck',
    options: [
      { text: 'Kendimi öldürmek gibi düşüncelerim yok.', score: 0 },
      {
        text: 'Zaman zaman kendimi öldürmeyi düşündüğüm olur. Fakat yapmıyorum.',
        score: 1,
      },
      { text: 'Kendimi öldürmek isterdim.', score: 2 },
      { text: 'Fırsatını bulsam kendimi öldürürdüm.', score: 3 },
    ],
    nextQuestion: 'BD10',
  },
  BD10: {
    id: 'BD10',
    type: 'beck',
    options: [
      { text: 'Her zamankinden fazla içimden ağlamak gelmiyor.', score: 0 },
      { text: 'Zaman zaman içimdem ağlamak geliyor.', score: 1 },
      { text: 'Çoğu zaman ağlıyorum.', score: 2 },
      {
        text: 'Eskiden ağlayabilirdim şimdi istesem de ağlayamıyorum.',
        score: 3,
      },
    ],
    nextQuestion: 'BD11',
  },
  BD11: {
    id: 'BD11',
    type: 'beck',
    options: [
      {
        text: 'Bir zamanlar beni sinirlendiren şeyler şimdi hiç sinirlendirmiyor.',
        score: 0,
      },
      {
        text: 'Eskisine kıyasla daha kolay kızıyor ya da sinirleniyorum.',
        score: 1,
      },
      { text: 'Çoğu zaman, oldukça sinirliyim.', score: 2 },
      { text: 'Şimdi hep sinirliyim.', score: 3 },
    ],
    nextQuestion: 'BD12',
  },
  BD12: {
    id: 'BD12',
    type: 'beck',
    options: [
      {
        text: 'Başkaları ile görüşmek, konuşmak isteğimi kaybetmedim.',
        score: 0,
      },
      {
        text: 'Başkaları ile eskiden daha az konuşmak, görüşmek istiyorum.',
        score: 1,
      },
      {
        text: 'Başkaları ile konuşma ve görüşme isteğimin çoğunu kaybettim.',
        score: 2,
      },
      { text: 'Hiç kimseyle konuşmak görüşmek istemiyorum.', score: 3 },
    ],
    nextQuestion: 'BD13',
  },
  BD13: {
    id: 'BD13',
    type: 'beck',
    options: [
      { text: 'Eskiden olduğu gibi kolay karar verebiliyorum.', score: 0 },
      { text: 'Eskiden olduğu kadar kolay karar veremiyorum.', score: 1 },
      {
        text: 'Karar verirken eskisine kıyasla çok güçlük çekiyorum.',
        score: 2,
      },
      { text: 'Artık hiç karar veremiyorum.', score: 3 },
    ],
    nextQuestion: 'BD14',
  },
  BD14: {
    id: 'BD14',
    type: 'beck',
    options: [
      { text: 'Aynada kendime baktığımda değişiklik görmüyorum.', score: 0 },
      { text: 'Daha yaşlanmış ve çirkinleşmişim gibi geliyor.', score: 1 },
      {
        text: 'Görünüşümün çok değiştiğini ve çirkinleştiğimi hissediyorum.',
        score: 2,
      },
      { text: 'Kendimi çok çirkin buluyorum.', score: 3 },
    ],
    nextQuestion: 'BD15',
  },
  BD15: {
    id: 'BD15',
    type: 'beck',
    options: [
      { text: 'Eskisi kadar iyi çalışabiliyorum.', score: 0 },
      {
        text: 'Bir şeyler yapabilmek için gayret göstermem gerekiyor.',
        score: 1,
      },
      {
        text: 'Herhangi bir şeyi yapabilmek için kendimi çok zorlamam gerekiyor.',
        score: 2,
      },
      { text: 'Hiçbir şey yapamıyorum.', score: 3 },
    ],
    nextQuestion: 'BD16',
  },
  BD16: {
    id: 'BD16',
    type: 'beck',
    options: [
      { text: 'Her zamanki gibi iyi uyuyabiliyorum.', score: 0 },
      { text: 'Eskiden olduğu gibi iyi uyuyamıyorum.', score: 1 },
      {
        text: 'Her zamankinden 1-2 saat daha erken uyanıyorum ve tekrar uyuyamıyorum.',
        score: 2,
      },
      {
        text: 'Her zamankinden çok daha erken uyanıyor ve tekrar uyuyamıyorum.',
        score: 3,
      },
    ],
    nextQuestion: 'BD17',
  },
  BD17: {
    id: 'BD17',
    type: 'beck',
    options: [
      { text: 'Her zamankinden daha çabuk yorulmuyorum.', score: 0 },
      { text: 'Her zamankinden daha çabuk yoruluyorum.', score: 1 },
      { text: 'Yaptığım her şey beni yoruyor.', score: 2 },
      {
        text: 'Kendimi hemen hiçbir şey yapamayacak kadar yorgun hissediyorum.',
        score: 3,
      },
    ],
    nextQuestion: 'BD18',
  },
  BD18: {
    id: 'BD18',
    type: 'beck',
    options: [
      { text: 'İştahım her zamanki gibi.', score: 0 },
      { text: 'iştahım her  zamanki kadar iyi değil.', score: 1 },
      { text: 'İştahım çok azaldı.', score: 2 },
      { text: 'Artık hiç iştahım yok.', score: 3 },
    ],
    nextQuestion: 'BD19',
  },
  BD19: {
    id: 'BD19',
    type: 'beck',
    options: [
      { text: 'Son zamanlarda kilo vermedim.', score: 0 },
      { text: 'İki kilodan fazla kilo verdim.', score: 1 },
      { text: 'Dört kilodan fazla kilo verdim.', score: 2 },
      { text: 'Altı kilodan fazla kilo vermeye çalışıyorum.', score: 3 },
    ],
    nextQuestion: 'BD20',
  },
  BD20: {
    id: 'BD20',
    type: 'beck',
    options: [
      { text: 'Sağlığım beni fazla endişelendirmiyor.', score: 0 },
      {
        text: 'Ağrı, sancı, mide bozukluğu veya kabızlık gibi rahatsızlıklar beni endişelendiriyor.',
        score: 1,
      },
      {
        text: 'Sağlığım beni endişelendirdiği için başka şeyleri düşünmek zorlaşıyor.',
        score: 2,
      },
      {
        text: 'Sağlığım hakkında o kadar endişeliyim ki başka hiçbir şey düşünemiyorum.',
        score: 3,
      },
    ],
    nextQuestion: 'BD21',
  },
  BD21: {
    id: 'BD21',
    type: 'beck',
    options: [
      {
        text: 'Son zamanlarda cinsel konulara olan ilgimde bir değişme fark etmedim.',
        score: 0,
      },
      { text: 'Cinsel konularla eskisinden daha az ilgiliyim.', score: 1 },
      { text: 'Cinsel konularla şimdi çok daha az ilgiliyim.', score: 2 },
      { text: 'Cinsel konular olan ilgimi tamamen kaybettim.', score: 3 },
    ],
    nextQuestion: undefined,
  },
};
