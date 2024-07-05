import { Injectable } from "@nestjs/common";
import { InfographicCreateInputNew } from "../infographics/InfographicCreateInputNew";
import { InfographicOutput } from "../infographics/InfographicOutput";
import { InfographicDeleteInput } from "../infographics/InfographicDeleteInput";
import { InfographicUpdateInputNew } from "../infographics/InfographicUpdateInputNew";

@Injectable()
export class InfographicsService {
  constructor() {}
  async CreateInfographic(args: InfographicCreateInputNew): Promise<InfographicOutput> {
    throw new Error("Not implemented");
  }
  async DeleteInfographic(args: InfographicDeleteInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async DownloadInfographic(args: InfographicUpdateInputNew): Promise<string> {
    throw new Error("Not implemented");
  }
  async FetchInfographicsPaged(args: InfographicUpdateInputNew): Promise<InfographicOutput[]> {
    throw new Error("Not implemented");
  }
  async GetInfographics(args: InfographicCreateInputNew): Promise<InfographicOutput[]> {
    throw new Error("Not implemented");
  }
  async UpdateInfographic(args: InfographicUpdateInputNew): Promise<InfographicOutput> {
    throw new Error("Not implemented");
  }
}
