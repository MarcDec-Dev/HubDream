import { ContentType } from "../enums/content-type.js";

export type Item = {
  id: string;

  title: string;
  type: ContentType;

  genres: string[]; // ex: ["romance", "slice of life"]
  synopsis?: string;

  coverImageUrl?: string;

  createdAt: Date;
  updatedAt: Date;
};
