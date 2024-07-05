import { InputJsonValue } from "../../types";

export type InfographicUpdateInput = {
  description?: string | null;
  image?: InputJsonValue;
  numberOfDownloads?: number | null;
  tag?: string | null;
  title?: string | null;
};
