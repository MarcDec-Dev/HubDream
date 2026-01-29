export type User = {
  id: string;
  email: string;
  passwordHash?: string; // opcional por causa do Google OAuth
  googleId?: string;     // opcional por causa do login social

  username: string;
  displayName: string;

  createdAt: Date;
  updatedAt: Date;
};
