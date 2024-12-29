import { Test } from '../types/tests';

export const tests: Test[] = [
  {
    id: 'beck-depression',
    name: 'Beck Depresyon Ölçeği',
    description: 'Depresyon şiddetini ölçen 21 maddelik değerlendirme',
    startQuestionId: 'BD1',
  },
  {
    id: 'beck-anxiety',
    name: 'Beck Anksiyete Ölçeği',
    description: 'Anksiyete belirtilerini değerlendiren 21 maddelik ölçek',
    startQuestionId: 'BA1',
  },
  {
    id: 'beck-suicide',
    name: 'Beck İntihar Düşüncesi Ölçeği',
    description: 'İntihar düşüncesi ve niyetini değerlendiren 21 maddelik ölçek',
    startQuestionId: 'Q1',
  },
  {
    id: 'scid-5-cv',
    name: 'SCID-5',
    description: "DSM-5'e göre yarı yapılandırılmış görüşme",
    startQuestionId: 'A0',
  },
];
