import { Infographic as TInfographic } from "../api/infographic/Infographic";

export const INFOGRAPHIC_TITLE_FIELD = "title";

export const InfographicTitle = (record: TInfographic): string => {
  return record.title?.toString() || String(record.id);
};
