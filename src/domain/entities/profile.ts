export type Profile = {
  id: string;
  userId: string;

  bio?: string;
  avatarUrl?: string;

  isPrivate: boolean; // se true, ninguém acessa por link

  themePrimary?: string;
  themeSecondary?: string;
  borderRadius?: number;

  createdAt: Date;
  updatedAt: Date;
};
