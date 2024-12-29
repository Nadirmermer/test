// Tanı değerlendirme tipleri
export interface DiagnosisResult {
  diagnosis: string;
  severity?: string;
  additionalInfo?: string;
}

// Kriter değerlendirme sonucu
export interface CriteriaResult {
  isMet: boolean;
  score?: number;
}

// Tanı kuralı
export interface DiagnosisRule {
  id: string;
  requiredCriteria: string[];
  minimumRequired: number;
  diagnosis: string;
  severity?: {
    mild: { min: number; max: number };
    moderate: { min: number; max: number };
    severe: { min: number };
  };
}