import { JsonValue } from "type-fest";

export type Infographic = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  numberOfDownloads: number | null;
  tag: string | null;
  title: string | null;
  updatedAt: Date;
};
