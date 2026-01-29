import { ContentType } from "../enums/content-type.js";

export type List = {
  id: string;
  ownerId: string;

  title: string;
  type: ContentType;

  tags: string[]; // ex: ["romance", "adulto", "psicológico"]

  coverImageUrl?: string;

  isPublic: boolean;      // compartilhável por link
  isHiddenFromVisitors: boolean; // ocultar em perfil compartilhado

  createdAt: Date;
  updatedAt: Date;
};
