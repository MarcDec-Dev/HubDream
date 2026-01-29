export type CreateListDTO = {
  title: string;
  type: "MOVIE" | "SERIES" | "ANIME" | "DONGHUA";
  tags?: string[];
  coverImageUrl?: string;
  isPublic?: boolean;
  isHiddenFromVisitors?: boolean;
};
