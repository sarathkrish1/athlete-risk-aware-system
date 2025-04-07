
export interface Athlete {
  id: string;
  name: string;
  position: string;
  avatar: string;
  age: number;
  height: string;
  weight: string;
  bmi: number;
  riskScore: number;
  flagged: boolean;
  metrics: {
    [key: string]: number;
  };
  trainingLoad: Array<{
    date: string;
    load: number;
    threshold?: number;
  }>;
  risks: Array<{
    title: string;
    riskLevel: number;
    bodyPart: string;
    description: string;
  }>;
}
