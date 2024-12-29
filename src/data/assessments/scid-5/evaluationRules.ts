import { QuestionState } from '../../../types/questions';

interface EvaluationRule {
  condition: (answers: QuestionState['answers']) => boolean;
  nextQuestion: string;
  diagnosis?: string;
}

export const scidEvaluationRules: Record<string, EvaluationRule> = {
  // A2 Değerlendirmesi
  A2: {
    condition: (answers) => {
      return answers['A1']?.answer === false && answers['A2']?.answer === false;
    },
    nextQuestion: 'A15',
  },
  A2_alt: {
    condition: (answers) => {
      return answers['A1']?.answer === true || answers['A2']?.answer === true;
    },
    nextQuestion: 'INFO3',
  },

  // A9 Değerlendirmesi
  A9: {
    condition: (answers) => {
      const questions = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'];
      return questions.filter((q) => answers[q]?.answer === true).length >= 5;
    },
    nextQuestion: 'A11',
  },
  A9_alt: {
    condition: (answers) => {
      const questions = ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'];
      return questions.filter((q) => answers[q]?.answer === true).length < 5;
    },
    nextQuestion: 'A15',
  },

  // A12_5 Değerlendirmesi
  A12_5: {
    condition: (answers) => answers['A12_5']?.answer === false,
    nextQuestion: '',
    diagnosis:
      "Bsd'na Bağlı Depresyon Bozukluğu ya da Maddenin Yol Açtığı Depresyon",
  },

  // A16 Değerlendirmesi
  A16: {
    condition: (answers) => {
      return (
        answers['A15']?.answer === false && answers['A16']?.answer === false
      );
    },
    nextQuestion: 'A29',
  },
  A16_alt: {
    condition: (answers) => {
      return answers['A15']?.answer === true || answers['A16']?.answer === true;
    },
    nextQuestion: 'INFO17',
  },

  // A23_1 Değerlendirmesi
  A23_1: {
    condition: (answers) => answers['A23_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'İntihar Şüphesi',
  },

  // A23 için değerlendirme kuralları
  A23_no: {
    condition: (answers) => {
      if (answers['A23']?.answer !== false) return false;
      const questions = [
        'A15_1',
        'A16',
        'A17',
        'A18',
        'A19',
        'A20',
        'A21',
        'A22',
        'A23',
      ];
      return questions.filter((q) => answers[q]?.answer === true).length >= 5;
    },
    nextQuestion: 'A25',
  },
  A23_no_alt: {
    condition: (answers) => {
      if (answers['A23']?.answer !== false) return false;
      const questions = [
        'A15_1',
        'A16',
        'A17',
        'A18',
        'A19',
        'A20',
        'A21',
        'A22',
        'A23',
      ];
      return questions.filter((q) => answers[q]?.answer === true).length < 5;
    },
    nextQuestion: 'A24',
  },
  A23_yes: {
    condition: (answers) => {
      if (
        answers['A23']?.answer !== true ||
        answers['A23_1']?.answer === undefined
      )
        return false;
      const questions = [
        'A15_1',
        'A16',
        'A17',
        'A18',
        'A19',
        'A20',
        'A21',
        'A22',
        'A23',
      ];
      return questions.filter((q) => answers[q]?.answer === true).length >= 5;
    },
    nextQuestion: 'A25',
  },
  A23_yes_alt: {
    condition: (answers) => {
      if (
        answers['A23']?.answer !== true ||
        answers['A23_1']?.answer === undefined
      )
        return false;
      const questions = [
        'A15_1',
        'A16',
        'A17',
        'A18',
        'A19',
        'A20',
        'A21',
        'A22',
        'A23',
      ];
      return questions.filter((q) => answers[q]?.answer === true).length < 5;
    },
    nextQuestion: 'A24',
  },

  // A26_5 Değerlendirmesi
  A26_5_yes: {
    condition: (answers) => answers['A26_5']?.answer === true,
    nextQuestion: '',
    diagnosis: 'GEÇMİŞ DEPRESYON DÖNEMİ',
  },
  A26_5_no: {
    condition: (answers) => answers['A26_5']?.answer === false,
    nextQuestion: '',
    diagnosis:
      "Bsd'na Bağlı Depresyon Bozukluğu ya da Maddenin Yol Açtığı Depresyon",
  },

  // A37 Değerlendirmesi
  A37: {
    condition: (answers) => {
      const questions = ['A31', 'A32', 'A33', 'A34', 'A35', 'A36', 'A37'];
      return questions.filter((q) => answers[q]?.answer === true).length >= 3;
    },
    nextQuestion: 'A39',
  },
  A37_alt: {
    condition: (answers) => {
      const questions = ['A31', 'A32', 'A33', 'A34', 'A35', 'A36', 'A37'];
      return questions.filter((q) => answers[q]?.answer === true).length < 3;
    },
    nextQuestion: 'A54',
  },

  // A40_5 sorusu
  A40_5_no: {
    condition: (answers) => answers['A40_5']?.answer === false,
    nextQuestion: '',
    diagnosis:
      "BSD'na Bağlı İkiuçlu Bozukluk ya da Maddenin Yol Açtığı İkiuçlu Bozukluk",
  },

  // A48 sonrası değerlendirme
  A48: {
    condition: (answers) => {
      const questions = ['A42', 'A43', 'A44', 'A45', 'A46', 'A47', 'A48'];
      return questions.filter((q) => answers[q]?.answer === true).length >= 3;
    },
    nextQuestion: 'A50',
  },
  A48_alt: {
    condition: (answers) => {
      const questions = ['A42', 'A43', 'A44', 'A45', 'A46', 'A47', 'A48'];
      return questions.filter((q) => answers[q]?.answer === true).length < 3;
    },
    nextQuestion: 'A54',
  },

  // A53_5 sorusu
  A53_5: {
    condition: (answers) => answers['A53_5']?.answer === false,
    nextQuestion: '',
    diagnosis:
      "BSD'na Bağlı İkiuçlu Bozukluk ya da Maddenin Yol Açtığı İkiuçlu Bozukluk",
  },

  // A62 sonrası değerlendirme
  A62: {
    condition: (answers) => {
      const questions = ['A56', 'A57', 'A58', 'A59', 'A60', 'A61', 'A62'];
      return questions.filter((q) => answers[q]?.answer === true).length >= 3;
    },
    nextQuestion: 'A64',
  },
  A62_alt: {
    condition: (answers) => {
      const questions = ['A56', 'A57', 'A58', 'A59', 'A60', 'A61', 'A62'];
      return questions.filter((q) => answers[q]?.answer === true).length < 3;
    },
    nextQuestion: 'A63',
  },

  // A65_5 sorusu
  A65_5: {
    condition: (answers) => answers['A65_5']?.answer === false,
    nextQuestion: '',
    diagnosis:
      "BSD'na Bağlı İkiuçlu Bozukluk ya da Maddenin Yol Açtığı İkiuçlu Bozukluk",
  },
  A65_5_alt: {
    condition: (answers) => answers['A65_5']?.answer === true,
    nextQuestion: '',
    diagnosis: 'Geçmiş Mani Dönemi',
  },

  // A73 sonrası değerlendirme
  A73_evaluation: {
    condition: (answers) => {
      const questions = ['A67', 'A68', 'A69', 'A70', 'A71', 'A72', 'A73'];
      return questions.filter((q) => answers[q]?.answer === true).length >= 3;
    },
    nextQuestion: 'INFO73',
  },
  A73_evaluation_alt: {
    condition: (answers) => {
      const questions = ['A67', 'A68', 'A69', 'A70', 'A71', 'A72', 'A73'];
      return questions.filter((q) => answers[q]?.answer === true).length < 3;
    },
    nextQuestion: 'A73_1',
  },

  // A75_5 sorusu
  A75_5_yes: {
    condition: (answers) => answers['A75_5']?.answer === true,
    nextQuestion: '',
    diagnosis: 'Geçmiş HipoMani Dönemi',
  },

  // A84 sonrası değerlendirme
  A84_evaluation: {
    condition: (answers) => {
      const questions = ['A79', 'A80', 'A81', 'A82', 'A83', 'A84'];
      return questions.filter((q) => answers[q]?.answer === true).length >= 2;
    },
    nextQuestion: 'A86',
  },
  A84_evaluation_alt: {
    condition: (answers) => {
      const questions = ['A79', 'A80', 'A81', 'A82', 'A83', 'A84'];
      return questions.filter((q) => answers[q]?.answer === true).length < 2;
    },
    nextQuestion: 'B1',
  },

  // A86 sonrası değerlendirme
  A86: {
    condition: (answers) => {
      const hasManic = answers['A40_5']?.answer === true;
      const hasHypomanic = answers['A53_5']?.answer === true;
      const hasPastManic = answers['A65_5']?.answer === true;
      const hasPastHypomanic = answers['A75_5']?.answer === true;
      return hasManic || hasHypomanic || hasPastManic || hasPastHypomanic;
    },
    nextQuestion: 'B1',
  },
  A86_alt: {
    condition: (answers) => {
      const hasManic = answers['A40_5']?.answer === true;
      const hasHypomanic = answers['A53_5']?.answer === true;
      const hasPastManic = answers['A65_5']?.answer === true;
      const hasPastHypomanic = answers['A75_5']?.answer === true;
      return !(hasManic || hasHypomanic || hasPastManic || hasPastHypomanic);
    },
    nextQuestion: 'A88',
  },

  // A89_5 sorusu
  A89_5_no: {
    condition: (answers) => answers['A89_5']?.answer === false,
    nextQuestion: '',
    diagnosis:
      "Bsd'na Bağlı Depresyon Bozukluğu ya da Maddenin Yol Açtığı Depresyon",
  },

  // A90 sorusu
  A90_yes: {
    condition: (answers) => answers['A90']?.answer === true,
    nextQuestion: '',
    diagnosis: 'Süregiden Depresyon Bozukluğu (o sırada)',
  },

  // C1 değerlendirmesi
  C1: {
    condition: (answers) => {
      return !Object.entries(answers).some(
        ([id, answer]) => id.startsWith('B') && answer.answer === true
      );
    },
    nextQuestion: 'D1',
  },

  // C6_1 sorusu
  C6_1: {
    condition: () => true,
    nextQuestion: '',
    diagnosis:
      "GSD'na Bağlı Psikozla Giden Bozukluk ya da Maddenin Yol Açtığı Psikozla Giden Bozukluk",
  },

  // C8_1 sorusu
  C8_1: {
    condition: () => true,
    nextQuestion: '',
    diagnosis:
      "GSD'na Bağlı Psikoz Bozukluğu ya da Maddenin Yol Açtığı Psikoz Bozukluğu",
  },

  // C17_1 sorusu
  C17_1: {
    condition: (answers) => answers['C17_1']?.answer !== undefined,
    nextQuestion: '',
    diagnosis:
      "GSD'na Bağlı Psikoz Bozukluğu ya da Maddenin Yol Açtığı Psikoz Bozukluğu",
  },

  // C21_1 sorusu
  C21_1: {
    condition: (answers) => answers['C21_1']?.answer !== undefined,
    nextQuestion: '',
    diagnosis:
      "GSD'na Bağlı Psikoz Bozukluğu ya da Maddenin Yol Açtığı Psikoz Bozukluğu",
  },

  // C24_1 sorusu
  C24_1: {
    condition: (answers) => answers['C24_1']?.answer !== undefined,
    nextQuestion: '',
    diagnosis:
      "GSD'na Bağlı Psikoz Bozukluğu ya da Maddenin Yol Açtığı Psikoz Bozukluğu",
  },

  // C25 sorusu
  C25: {
    condition: (answers) => answers['C25']?.answer !== undefined,
    nextQuestion: '',
    diagnosis: 'Şizofreni',
  },

  // C26 sorusu
  C26: {
    condition: (answers) => answers['C26']?.answer !== undefined,
    nextQuestion: '',
    diagnosis: 'Şizofreni',
  },

  // C27 sorusu
  C27: {
    condition: (answers) => answers['C27']?.answer !== undefined,
    nextQuestion: '',
    diagnosis: 'ŞİZODUYGULANIMSAL BOZUKLUK',
  },

  // C28 sorusu
  C28: {
    condition: (answers) => answers['C28']?.answer !== undefined,
    nextQuestion: '',
    diagnosis: 'SANRISAL BOZUKLUK',
  },

  // C29 sorusu
  C29: {
    condition: (answers) => answers['C29']?.answer !== undefined,
    nextQuestion: '',
    diagnosis: 'Kısa Psikoz Bozukluğu',
  },

  // C30 sorusu
  C30: {
    condition: (answers) => answers['C30']?.answer !== undefined,
    nextQuestion: '',
    diagnosis:
      'Tanımlanmış Diğer Bir (YA DA Tanımlanmamış) Şizofreni Kapsamında ve Psikozla Giden Diğer Bozukluk',
  },

  // D2 değerlendirmesi
  D2: {
    condition: (answers) =>
      answers['A40_5']?.answer === true || answers['A65_5']?.answer === true,
    nextQuestion: 'D3',
  },
  D2_alt: {
    condition: (answers) =>
      !(answers['A40_5']?.answer === true || answers['A65_5']?.answer === true),
    nextQuestion: 'D4',
  },

  // D3 değerlendirmesi
  D3: {
    condition: (answers) => {
      const hasSchizophrenia =
        answers['C25']?.answer === true || answers['C26']?.answer === true;
      const hasDelusional = answers['C28']?.answer === true;
      const hasOtherPsychotic = answers['C30']?.answer === true;
      return hasSchizophrenia || hasDelusional || hasOtherPsychotic;
    },
    nextQuestion: 'D4',
  },
  D3_alt: {
    condition: (answers) => {
      const hasSchizophrenia =
        answers['C25']?.answer === true || answers['C26']?.answer === true;
      const hasDelusional = answers['C28']?.answer === true;
      const hasOtherPsychotic = answers['C30']?.answer === true;
      return !(hasSchizophrenia || hasDelusional || hasOtherPsychotic);
    },
    nextQuestion: '',
    diagnosis: 'İKİUÇLU I BOZUKLUĞU',
  },

  // D4 değerlendirmesi
  D4: {
    condition: (answers) =>
      answers['A53_5']?.answer === true || answers['A75_5']?.answer === true,
    nextQuestion: 'D5',
  },
  D4_alt: {
    condition: (answers) =>
      !(answers['A53_5']?.answer === true || answers['A75_5']?.answer === true),
    nextQuestion: 'D8',
  },

  // D5 değerlendirmesi
  D5: {
    condition: (answers) =>
      answers['A40_5']?.answer === true || answers['A65_5']?.answer === true,
    nextQuestion: 'D2',
  },
  D5_alt: {
    condition: (answers) =>
      !(answers['A40_5']?.answer === true || answers['A65_5']?.answer === true),
    nextQuestion: 'D6',
  },

  // D6 değerlendirmesi
  D6: {
    condition: (answers) => {
      const hasSchizophrenia =
        answers['C25']?.answer === true || answers['C26']?.answer === true;
      const hasDelusional = answers['C28']?.answer === true;
      const hasOtherPsychotic = answers['C30']?.answer === true;
      return hasSchizophrenia || hasDelusional || hasOtherPsychotic;
    },
    nextQuestion: 'D7',
  },
  D6_alt: {
    condition: (answers) => {
      const hasSchizophrenia =
        answers['C25']?.answer === true || answers['C26']?.answer === true;
      const hasDelusional = answers['C28']?.answer === true;
      const hasOtherPsychotic = answers['C30']?.answer === true;
      return !(hasSchizophrenia || hasDelusional || hasOtherPsychotic);
    },
    nextQuestion: 'D8',
  },

  // D10 sorusu
  D10: {
    condition: (answers) => answers['D10']?.answer === true,
    nextQuestion: 'E1',
    diagnosis:
      "GSD'na Bağlı İkluçlu Bozukluk ya da Maddenin Yol Açtığı ikiuçlu Bozukluk",
  },

  // D12 değerlendirmesi
  D12: {
    condition: (answers) => {
      const hasSchizophreniform =
        answers['C25']?.answer === true || answers['C26']?.answer === true;
      const hasDelusional = answers['C28']?.answer === true;
      const hasOtherPsychotic = answers['C30']?.answer === true;
      return hasSchizophreniform || hasDelusional || hasOtherPsychotic;
    },
    nextQuestion: 'D14',
  },
  D12_alt: {
    condition: (answers) => {
      const hasSchizophreniform =
        answers['C25']?.answer === true || answers['C26']?.answer === true;
      const hasDelusional = answers['C28']?.answer === true;
      const hasOtherPsychotic = answers['C30']?.answer === true;
      return !(hasSchizophreniform || hasDelusional || hasOtherPsychotic);
    },
    nextQuestion: 'D13',
  },

  // D16 sorusu
  D16: {
    condition: (answers) => answers['D16']?.answer === false,
    nextQuestion: 'E1',
    diagnosis:
      "GSD'na Bağlı Depresyon Bozukluğu ya da Maddenin Yol Açtığı Depresyon",
  },

  // D17 sorusu
  D17: {
    condition: (answers) => answers['D17']?.answer === true,
    nextQuestion: '',
    diagnosis: 'İkiuçlu I Bozukluğu, O sıradaki Dönem Mani',
  },
  D17_alt: {
    condition: (answers) => answers['D17']?.answer === false,
    nextQuestion: '',
    diagnosis: 'İkiuçlu I Bozukluğu, En Son Dönem Mani',
  },

  // D18 sorusu
  D18: {
    condition: (answers) => answers['D18']?.answer === true,
    nextQuestion: '',
    diagnosis: 'İkiuçlu I Bozukluğu, O Sıradaki Dönem Depresyon',
  },
  D18_alt: {
    condition: (answers) => answers['D18']?.answer === false,
    nextQuestion: '',
    diagnosis: 'İkiuçlu I Bozukluğu, En Son Dönem Depresyon',
  },

  // D19 sorusu
  D19: {
    condition: (answers) => answers['D19']?.answer === true,
    nextQuestion: '',
    diagnosis: 'İkiuçlu I Bozukluğu, O Sıradaki Dönem Hipomani',
  },
  D19_alt: {
    condition: (answers) => answers['D19']?.answer === false,
    nextQuestion: '',
    diagnosis: 'İkiuçlu I Bozukluğu, En Son Dönem Hipomani',
  },

  // D20 sorusu
  D20: {
    condition: (answers) => answers['D20']?.answer === true,
    nextQuestion: '',
    diagnosis: 'İkiuçlu I Bozukluğu, O Sıradaki Dönem Tanımlanmamış',
  },
  D20_alt: {
    condition: (answers) => answers['D20']?.answer === false,
    nextQuestion: '',
    diagnosis: 'İkiuçlu I Bozukluğu, En Son Dönem Tanımlanmamış',
  },

  // D21 sorusu
  D21: {
    condition: (answers) => answers['D21']?.answer === true,
    nextQuestion: '',
    diagnosis: 'İkiuçlu II Bozukluğu, O Sıradaki Dönem Hipomani',
  },
  D21_alt: {
    condition: (answers) => answers['D21']?.answer === false,
    nextQuestion: '',
    diagnosis: 'İkiuçlu II Bozukluğu, En Son Dönem Hipomani',
  },

  // D22 sorusu
  D22: {
    condition: (answers) => answers['D22']?.answer === true,
    nextQuestion: '',
    diagnosis: 'İkiuçlu II Bozukluğu, O Sıradaki Dönem Depresyon',
  },
  D22_alt: {
    condition: (answers) => answers['D22']?.answer === false,
    nextQuestion: '',
    diagnosis: 'İkiuçlu II Bozukluğu, En Son Dönem Depresyon',
  },

  // D23 sorusu
  D23: {
    condition: (answers) => answers['D23']?.answer !== undefined,
    nextQuestion: '',
    diagnosis:
      'İKİUÇLU II BOZUKLUĞU, O SIRADAKİ YA DA EN SON TANIMLANMAMIŞ DÖNEM',
  },

  // D24 sorusu
  D24: {
    condition: (answers) => answers['D24']?.answer === true,
    nextQuestion: '',
    diagnosis: 'YEĞİN DEPRESYON BOZUKLUĞU, O Sıradaki Dönem Depresyon',
  },
  D24_alt: {
    condition: (answers) => answers['D24']?.answer === false,
    nextQuestion: '',
    diagnosis: 'YEĞİN DEPRESYON BOZUKLUĞU, Geçmiş dönem',
  },

  // D25 sorusu
  D25: {
    condition: (answers) => answers['D25']?.answer !== undefined,
    nextQuestion: '',
    diagnosis:
      'Tanımlanmış Diğer Bir (YA DA Tanımlanmamış) Depresyon Bozukluğu',
  },

  // E13 değerlendirmesi
  E13: {
    condition: (answers) => {
      const questions = [
        'E2',
        'E3',
        'E4',
        'E5',
        'E6_4',
        'E7',
        'E8',
        'E9',
        'E10',
        'E11',
        'E12_1',
      ];
      const yesCount = questions.filter(
        (q) => answers[q]?.answer === true
      ).length;
      return yesCount >= 6;
    },
    nextQuestion: 'E14',
    diagnosis: 'Alkol Kullanım Bozukluğu, Ağır',
  },
  E13_moderate: {
    condition: (answers) => {
      const questions = [
        'E2',
        'E3',
        'E4',
        'E5',
        'E6_4',
        'E7',
        'E8',
        'E9',
        'E10',
        'E11',
        'E12_1',
      ];
      const yesCount = questions.filter(
        (q) => answers[q]?.answer === true
      ).length;
      return yesCount >= 4 && yesCount <= 5;
    },
    nextQuestion: 'E14',
    diagnosis: 'Alkol Kullanım Bozukluğu, Orta derecede',
  },
  E13_mild: {
    condition: (answers) => {
      const questions = [
        'E2',
        'E3',
        'E4',
        'E5',
        'E6_4',
        'E7',
        'E8',
        'E9',
        'E10',
        'E11',
        'E12_1',
      ];
      const yesCount = questions.filter(
        (q) => answers[q]?.answer === true
      ).length;
      return yesCount >= 2 && yesCount <= 3;
    },
    nextQuestion: 'E14',
    diagnosis: 'Alkol Kullanım Bozukluğu, Ağır olmayan',
  },
  E13_none: {
    condition: (answers) => {
      const questions = [
        'E2',
        'E3',
        'E4',
        'E5',
        'E6_4',
        'E7',
        'E8',
        'E9',
        'E10',
        'E11',
        'E12_1',
      ];
      const yesCount = questions.filter(
        (q) => answers[q]?.answer === true
      ).length;
      return yesCount < 2;
    },
    nextQuestion: 'E14',
  },

  // E22 sonrası değerlendirme
  E22: {
    condition: (answers) => {
      const questions = [
        'E15',
        'E16',
        'E17',
        'E18',
        'E19',
        'E20',
        'E21',
        'E22',
      ];
      return questions.filter((q) => answers[q]?.answer === true).length >= 1;
    },
    nextQuestion: 'Ea1',
  },
  E22_alt: {
    condition: (answers) => {
      const questions = [
        'E15',
        'E16',
        'E17',
        'E18',
        'E19',
        'E20',
        'E21',
        'E22',
      ];
      return questions.filter((q) => answers[q]?.answer === true).length < 1;
    },
    nextQuestion: 'F1',
  },

  // E35 değerlendirmesi
  E35: {
    condition: (answers) => {
      const questions = [
        'E24',
        'E25',
        'E26',
        'E27',
        'E28_4',
        'E29',
        'E30',
        'E31',
        'E32',
        'E33',
        'E34',
      ];
      return questions.filter((q) => answers[q]?.answer === true).length >= 2;
    },
    nextQuestion: 'E35',
  },
  E35_alt: {
    condition: (answers) => {
      const questions = [
        'E24',
        'E25',
        'E26',
        'E27',
        'E28_3',
        'E29',
        'E30',
        'E31',
        'E32',
        'E33',
        'E34',
      ];
      return questions.filter((q) => answers[q]?.answer === false).length >= 2;
    },
    nextQuestion: 'E36',
  },

  // F14 değerlendirmesi
  F14: {
    condition: (answers) => {
      const questions = [
        'F2',
        'F3',
        'F4',
        'F5',
        'F6',
        'F7',
        'F8',
        'F9',
        'F10',
        'F11',
        'F12',
        'F13',
        'F14',
      ];
      return questions.filter((q) => answers[q]?.answer === true).length >= 4;
    },
    nextQuestion: 'F16',
  },
  F14_alt: {
    condition: (answers) => {
      const questions = [
        'F2',
        'F3',
        'F4',
        'F5',
        'F6',
        'F7',
        'F8',
        'F9',
        'F10',
        'F11',
        'F12',
        'F13',
        'F14',
      ];
      return questions.filter((q) => answers[q]?.answer === true).length < 4;
    },
    nextQuestion: 'F15',
  },

  // F20 değerlendirmesi
  F20: {
    condition: (answers) => answers['F20']?.answer === false,
    nextQuestion: 'F23',
    diagnosis:
      'BSDna Kaygı Bozukluğu ya da Maddenin yol açtığı Kaygı Bozukluğu',
  },
  F20_pre: {
    condition: (answers) => {
      return (
        answers['F17']?.answer === false && answers['F18']?.answer === false
      );
    },
    nextQuestion: 'F23',
  },
  F20_pre_alt: {
    condition: (answers) => {
      return answers['F17']?.answer === true || answers['F18']?.answer === true;
    },
    nextQuestion: 'F20',
  },

  // F22 sorusu
  F22: {
    condition: (answers) => answers['F22']?.answer === true,
    nextQuestion: '',
    diagnosis: 'Panik Bozukluğu, O sıradaki',
  },
  F22_alt: {
    condition: (answers) => answers['F22']?.answer === false,
    nextQuestion: '',
    diagnosis: 'Panik Bozukluğu, Geçmiş Öykü',
  },

  // F31 sorusu
  F31: {
    condition: (answers) => answers['F31']?.answer === true,
    nextQuestion: '',
    diagnosis: 'Agarafobi (o sırada)',
  },

  // F39 sorusu
  F39: {
    condition: (answers) => answers['F39']?.answer === true,
    nextQuestion: '',
    diagnosis:
      'BSDna Kaygı Bozukluğu ya da Maddenin yol açtığı Kaygı Bozukluğu',
  },

  // F41 sorusu
  F41: {
    condition: (answers) => answers['F41']?.answer === true,
    nextQuestion: '',
    diagnosis: 'Toplumsal Kaygı Bozukluğu (o sırada)',
  },

  // F50 değerlendirmesi
  F50: {
    condition: (answers) => {
      const questions = ['F45', 'F46', 'F47', 'F48', 'F49', 'F50'];
      return questions.filter((q) => answers[q]?.answer === true).length >= 3;
    },
    nextQuestion: 'F52',
  },
  F50_alt: {
    condition: (answers) => {
      const questions = ['F45', 'F46', 'F47', 'F48', 'F49', 'F50'];
      return questions.filter((q) => answers[q]?.answer === true).length < 3;
    },
    nextQuestion: 'G1',
  },

  // F53 sorusu
  F53: {
    condition: (answers) => answers['F53']?.answer === true,
    nextQuestion: '',
    diagnosis:
      'BSDna Kaygı Bozukluğu ya da Maddenin yol açtığı Kaygı Bozukluğu',
  },

  // F54 sorusu
  F54: {
    condition: (answers) => answers['F54']?.answer === true,
    nextQuestion: '',
    diagnosis: 'Yaygın Kaygı Bozukluğu (o sırada)',
  },

  // G2 sorusu
  G2: {
    condition: (answers) => answers['G2']?.answer === true,
    nextQuestion: '',
    diagnosis: 'TAKINTILAR',
  },

  // G4 sorusu
  G4: {
    condition: (answers) => answers['G4']?.answer === true,
    nextQuestion: '',
    diagnosis: 'ZORLANTI',
  },

  // G7 sorusu
  G7: {
    condition: (answers) => answers['G7']?.answer === true,
    nextQuestion: '',
    diagnosis:
      "BSD'na bağlı TZ ve İlişkili Bozukluk ya da Maddenin Yol Açtığı TZ ve İlişkili Bozukluk",
  },

  // G8 sorusu
  G8: {
    condition: (answers) => answers['G8']?.answer === true,
    nextQuestion: '',
    diagnosis: 'Takıntı-Zorlantı Bozukluğu (o sırada)',
  },

  // G21 değerlendirmesi
  G21: {
    condition: (answers) => {
      return (
        answers['G20']?.answer === false && answers['G21']?.answer === false
      );
    },
    nextQuestion: 'G22',
  },
  G21_alt: {
    condition: (answers) => {
      return answers['G20']?.answer === true || answers['G21']?.answer === true;
    },
    nextQuestion: 'G23',
  },

  // G29 değerlendirmesi
  G29: {
    condition: (answers) => {
      const questions = ['G23', 'G24', 'G25', 'G26', 'G27', 'G28', 'G29'];
      return questions.filter((q) => answers[q]?.answer === true).length >= 1;
    },
    nextQuestion: 'G31',
  },
  G29_alt: {
    condition: (answers) => {
      const questions = ['G23', 'G24', 'G25', 'G26', 'G27', 'G28', 'G29'];
      return questions.filter((q) => answers[q]?.answer === true).length < 1;
    },
    nextQuestion: 'G30',
  },

  // G36 değerlendirmesi
  G36: {
    condition: (answers) => {
      const questions = ['G31', 'G32', 'G33', 'G34', 'G35', 'G36'];
      return questions.filter((q) => answers[q]?.answer === true).length >= 1;
    },
    nextQuestion: 'G37',
  },
  G36_alt: {
    condition: (answers) => {
      const questions = ['G31', 'G32', 'G33', 'G34', 'G35', 'G36'];
      return questions.filter((q) => answers[q]?.answer === true).length < 1;
    },
    nextQuestion: 'G38',
  },

  // G40 değerlendirmesi
  G40: {
    condition: (answers) => {
      const requiredQuestions = ['G19', 'G22', 'G30', 'G37'];
      return requiredQuestions.every((q) => answers[q]?.answer === true);
    },
    nextQuestion: '',
    diagnosis: 'Örselenme Sonrası Gerginlik Bozukluğu (o sırada)',
  },
  G40_alt: {
    condition: (answers) => {
      const requiredQuestions = ['G19', 'G22', 'G30', 'G37'];
      return !requiredQuestions.every((q) => answers[q]?.answer === true);
    },
    nextQuestion: 'H1',
  },

  // H22 için düzeltilmiş değerlendirme kuralları
  H22: {
    condition: (answers) => {
      const a1Questions = [
        'H2',
        'H3',
        'H4',
        'H5',
        'H6',
        'H7',
        'H8',
        'H9',
        'H10',
      ];
      const a2Questions = [
        'H12',
        'H13',
        'H14',
        'H15',
        'H16',
        'H17',
        'H18',
        'H19',
        'H20',
      ];

      const a1Count = a1Questions.filter(
        (q) => answers[q]?.answer === true
      ).length;
      const a2Count = a2Questions.filter(
        (q) => answers[q]?.answer === true
      ).length;

      return a1Count >= 5 || a2Count >= 5;
    },
    nextQuestion: 'H23',
  },
  H22_alt: {
    condition: (answers) => {
      const a1Questions = [
        'H2',
        'H3',
        'H4',
        'H5',
        'H6',
        'H7',
        'H8',
        'H9',
        'H10',
      ];
      const a2Questions = [
        'H12',
        'H13',
        'H14',
        'H15',
        'H16',
        'H17',
        'H18',
        'H19',
        'H20',
      ];

      const a1Count = a1Questions.filter(
        (q) => answers[q]?.answer === true
      ).length;
      const a2Count = a2Questions.filter(
        (q) => answers[q]?.answer === true
      ).length;

      return a1Count < 5 && a2Count < 5;
    },
    nextQuestion: 'I1',
  },

  // I1_3 sorusu
  I1_3_yes: {
    condition: (answers) => answers['I1_3']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI AYBAŞI ÖNCESİ DİSFORİ BOZUKLUĞU',
  },

  // I2_1 sorusu
  I2_1_yes: {
    condition: (answers) => answers['I2_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI ÖZGÜL FOBİ',
  },

  // I3_1 sorusu
  I3_1_yes: {
    condition: (answers) => answers['I3_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI AYRILMA KAYGISI BOZUKLUĞU',
  },

  // I4_1 sorusu
  I4_1_yes: {
    condition: (answers) => answers['I4_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI BİRİKTİRİCİLİK BOZUKLUĞU',
  },

  // I5_1 sorusu
  I5_1_yes: {
    condition: (answers) => answers['I5_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI BEDEN ALGISI BOZUKLUĞU',
  },

  // I6_1 sorusu
  I6_1_yes: {
    condition: (answers) => answers['I6_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI TRİKOTİLLOMANİ',
  },

  // I7_1 sorusu
  I7_1_yes: {
    condition: (answers) => answers['I7_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI DERİ YOLMA BOZUKLUĞU',
  },

  // I8_1 sorusu
  I8_1_yes: {
    condition: (answers) => answers['I8_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI UYKUSUZLUK BOZUKLUĞU',
  },

  // I9_1 sorusu
  I9_1_yes: {
    condition: (answers) => answers['I9_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI AŞIRI UYKULULUK BOZUKLUĞU',
  },

  // I10_1 sorusu
  I10_1_yes: {
    condition: (answers) => answers['I10_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI ANOREKSİYA NERVOZA',
  },

  // I11_1 sorusu
  I11_1_yes: {
    condition: (answers) => answers['I11_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI BULİMİYA NERVOZA YA DA TIKINIRCASINA YEME BOZUKLUĞU',
  },

  // I12_1 sorusu
  I12_1_yes: {
    condition: (answers) => answers['I12_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI KAÇINCIAN/KISITLI YİYECEK ALIM BOZUKLUĞU',
  },

  // I13_1 sorusu
  I13_1_yes: {
    condition: (answers) => answers['I13_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI BEDENSEL BELİRTİ BOZUKLUĞU',
  },

  // I14_1 sorusu
  I14_1_yes: {
    condition: (answers) => answers['I14_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI HASTALIK KAYGISI BOZUKLUĞU',
  },

  // I15_2 sorusu
  I15_2_yes: {
    condition: (answers) => answers['I15_2']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI ARALIKLI PATLAYICI BOZUKLUK',
  },

  // I16_1 sorusu
  I16_1_yes: {
    condition: (answers) => answers['I16_1']?.answer === true,
    nextQuestion: '',
    diagnosis: 'OLASI KUMAR OYNAMA BOZUKLUĞU',
  },

  // J5 sorusu
  J5_yes: {
    condition: (answers) => answers['J5']?.answer === true,
    nextQuestion: '',
    diagnosis: 'Uyum Bozukluğu (o sırada)',
  },
};
