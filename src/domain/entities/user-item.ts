export type UserItem = {
  id: string;
  userId: string;
  itemId: string;

  rating?: number; // 1..5
  personalNote?: string;

  // campos “refinados” que alimentam recomendação
  tone?: string;       // ex: "melancólico", "leve", "intenso"
  maturity?: string;   // ex: "adulto", "jovem-adulto"
  pacing?: string;     // ex: "lento", "médio", "rápido"
  romanceStyle?: string; // ex: "realista", "idealizado"

  createdAt: Date;
  updatedAt: Date;
};
