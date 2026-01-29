import { LinkType } from "../enums/link-type.js";

export type ExternalLink = {
  id: string;
  userId: string;

  title: string; // nome amigável: "Site principal", "Alternativo 1"
  url: string;
  type: LinkType;

  createdAt: Date;
  updatedAt: Date;
};
