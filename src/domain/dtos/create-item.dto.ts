export type CreateItemDTO = {
  title: string;
  type: "MOVIE" | "SERIES" | "ANIME" | "DONGHUA";
  genres?: string[];
  synopsis?: string;
  coverImageUrl?: string;
};
