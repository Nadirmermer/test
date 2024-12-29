// SCID-5 Tanı Kriterleri için tip tanımlamaları
import { QuestionState } from '../../../types/questions';

// Her bir bozukluk için tanı kriterleri
export interface DiagnosisCriteria {
  questions?: string[];
  question?: string;
  diagnosis: string;
  additionalInfo?: string;
  criteria?: string[];
  severity?: {
    mild: { min: number; max: number; description: string };
    moderate: { min: number; max: number; description: string };
    severe: { min: number; description: string };
  };
}

// SCID-5 Tanı Kriterleri
export const scidCriteria = {
  // Psikotik Bozukluklar
  psychotic: {
    gsdPsychotic: {
      questions: ['C6_1', 'C8_1', 'C17_1', 'C21_1', 'C24_1'],
      diagnosis: "GSD'na Bağlı Psikoz Bozukluğu ya da Maddenin Yol Açtığı Psikoz Bozukluğu"
    },
    schizophrenia: {
      questions: ['C25', 'C26'],
      diagnosis: "Şizofreni"
    },
    schizoaffective: {
      question: 'C27',
      diagnosis: "Şizoduygulanımsal Bozukluk"
    },
    delusional: {
      question: 'C28',
      diagnosis: "Sanrısal Bozukluk"
    }
  },

  // Duygudurum Bozuklukları
  mood: {
    bipolar1: {
      manic: {
        current: { question: 'D17', diagnosis: "İkiuçlu I Bozukluğu, O sıradaki Dönem Mani" },
        past: { question: 'D17', diagnosis: "İkiuçlu I Bozukluğu, En Son Dönem Mani" }
      },
      depressive: {
        current: { question: 'D18', diagnosis: "İkiuçlu I Bozukluğu, O Sıradaki Dönem Depresyon" },
        past: { question: 'D18', diagnosis: "İkiuçlu I Bozukluğu, En Son Dönem Depresyon" }
      }
    },
    majorDepression: {
      current: { question: 'D24', diagnosis: "Yeğin Depresyon Bozukluğu, O Sıradaki Dönem" },
      past: { question: 'D24', diagnosis: "Yeğin Depresyon Bozukluğu, Geçmiş Dönem" }
    }
  },

  // Anksiyete Bozuklukları
  anxiety: {
    panic: {
      current: { question: 'F22', diagnosis: "Panik Bozukluğu, O sıradaki" },
      past: { question: 'F22', diagnosis: "Panik Bozukluğu, Geçmiş Öykü" }
    },
    agoraphobia: {
      question: 'F31',
      diagnosis: "Agorafobi (o sırada)"
    },
    social: {
      question: 'F41',
      diagnosis: "Toplumsal Kaygı Bozukluğu (o sırada)"
    }
  },

  // Madde Kullanım Bozuklukları
  substance: {
    alcohol: {
      criteria: ['E2', 'E3', 'E4', 'E5', 'E6_4', 'E7', 'E8', 'E9', 'E10', 'E11', 'E12'],
      severity: {
        mild: { min: 2, max: 3, description: "Ağır olmayan" },
        moderate: { min: 4, max: 5, description: "Orta derecede" },
        severe: { min: 6, description: "Ağır" }
      },
      diagnosis: "Alkol Kullanım Bozukluğu"
    }
  }
};