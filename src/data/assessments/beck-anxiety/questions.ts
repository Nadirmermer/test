import { Question } from '../../../types/questions';

// Test başlangıç açıklaması
export const beckAnxietyIntro = `
Aşağıda insanların kaygılı ya da endişeli oldukları zamanlarda yaşadıkları bazı belirtiler verilmiştir.
 Lütfen her maddeyi dikkatle okuyunuz. Daha sonra, her maddedeki belirtinin BUGÜN DAHİL SON BİR (1) HAFTADIR sizi ne kadar rahatsız ettiğini seçeneği işaretleyerek belirleyiniz.
`;

export const beckAnxietyQuestions: Record<string, Question> = {
  BA1: {
    id: 'BA1',
    type: 'beck',
    text: 'Bedeninizin herhangi bir yerinde uyuşma veya karıncalanma',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA2',
    infoText: beckAnxietyIntro,
  },
  BA2: {
    id: 'BA2',
    type: 'beck',
    text: 'Sıcak/ateş basmaları',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA3',
  },
  BA3: {
    id: 'BA3',
    type: 'beck',
    text: 'Bacaklarda halsizlik, titreme',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA4',
  },
  BA4: {
    id: 'BA4',
    type: 'beck',
    text: 'Gevşeyememe',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA5',
  },
  BA5: {
    id: 'BA5',
    type: 'beck',
    text: ' Çok kötü şeyler olacak korkusu',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA6',
  },
  BA6: {
    id: 'BA6',
    type: 'beck',
    text: 'Baş dönmesi veya sersemlik',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA7',
  },
  BA7: {
    id: 'BA7',
    type: 'beck',
    text: 'Kalp çarpıntısı',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA8',
  },
  BA8: {
    id: 'BA8',
    type: 'beck',
    text: 'Dengeyi kaybetme duygusu',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA9',
  },
  BA9: {
    id: 'BA9',
    type: 'beck',
    text: ' Dehşete kapılma',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA10',
  },
  BA10: {
    id: 'BA10',
    type: 'beck',
    text: 'Sinirlilik',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA11',
  },
  BA11: {
    id: 'BA11',
    type: 'beck',
    text: 'Boğuluyormuş gibi olma duygusu',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA12',
  },
  BA12: {
    id: 'BA12',
    type: 'beck',
    text: 'Ellerde titreme',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA13',
  },
  BA13: {
    id: 'BA13',
    type: 'beck',
    text: 'Titreklik',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA14',
  },
  BA14: {
    id: 'BA14',
    type: 'beck',
    text: 'Kontrolü kaybetme korkusu',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA15',
  },
  BA15: {
    id: 'BA15',
    type: 'beck',
    text: 'Nefes almada güçlük',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA16',
  },
  BA16: {
    id: 'BA16',
    type: 'beck',
    text: 'Ölüm korkusu',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA17',
  },
  BA17: {
    id: 'BA17',
    type: 'beck',
    text: 'Korkuya kapılma',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA18',
  },
  BA18: {
    id: 'BA18',
    type: 'beck',
    text: 'Midede hazımsızlık ya da rahatsızlık hissi',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA19',
  },
  BA19: {
    id: 'BA19',
    type: 'beck',
    text: 'Baygınlık',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA20',
  },
  BA20: {
    id: 'BA20',
    type: 'beck',
    text: 'Yüzün kızarması',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: 'BA21',
  },
  BA21: {
    id: 'BA21',
    type: 'beck',
    text: 'Terleme (sıcaklığa bağlı olmayan)',
    options: [
      { text: 'Hiç', score: 0 },
      { text: 'Hafif düzeyde (Beni pek etkilemedi)', score: 1 },
      { text: 'Orta düzeyde (Hoş değildi ama katlanabildin)', score: 2 },
      { text: 'Ciddi düzeyde (Dayanmakta çok zorlandım)', score: 3 },
    ],
    nextQuestion: undefined,
  },
};
