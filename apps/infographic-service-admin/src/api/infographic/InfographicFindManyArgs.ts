import { InfographicWhereInput } from "./InfographicWhereInput";
import { InfographicOrderByInput } from "./InfographicOrderByInput";

export type InfographicFindManyArgs = {
  where?: InfographicWhereInput;
  orderBy?: Array<InfographicOrderByInput>;
  skip?: number;
  take?: number;
};
