import { InputJsonValue } from "../../types";

export type InfographicCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  numberOfDownloads?: number | null;
  tag?: string | null;
  title?: string | null;
};
