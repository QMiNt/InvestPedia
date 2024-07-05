import { SortOrder } from "../../util/SortOrder";

export type InfographicOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  numberOfDownloads?: SortOrder;
  tag?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
