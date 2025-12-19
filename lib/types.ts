export type PredictionResult = {
  label: 'healthy' | 'fungal' | 'bacterial';
  confidence: number;
  suggestion: string;
};

export type UploadedImage = {
  file: File;
  preview: string;
};
