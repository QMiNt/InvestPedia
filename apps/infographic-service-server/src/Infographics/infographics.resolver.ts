import * as graphql from "@nestjs/graphql";
import { InfographicCreateInputNew } from "../infographics/InfographicCreateInputNew";
import { InfographicOutput } from "../infographics/InfographicOutput";
import { InfographicDeleteInput } from "../infographics/InfographicDeleteInput";
import { InfographicUpdateInputNew } from "../infographics/InfographicUpdateInputNew";
import { InfographicsService } from "./infographics.service";

export class InfographicsResolver {
  constructor(protected readonly service: InfographicsService) {}

  @graphql.Mutation(() => InfographicOutput)
  async CreateInfographic(
    @graphql.Args()
    args: InfographicCreateInputNew
  ): Promise<InfographicOutput> {
    return this.service.CreateInfographic(args);
  }

  @graphql.Mutation(() => String)
  async DeleteInfographic(
    @graphql.Args()
    args: InfographicDeleteInput
  ): Promise<string> {
    return this.service.DeleteInfographic(args);
  }

  @graphql.Query(() => String)
  async DownloadInfographic(
    @graphql.Args()
    args: InfographicUpdateInputNew
  ): Promise<string> {
    return this.service.DownloadInfographic(args);
  }

  @graphql.Query(() => [InfographicOutput])
  async FetchInfographicsPaged(
    @graphql.Args()
    args: InfographicUpdateInputNew
  ): Promise<InfographicOutput[]> {
    return this.service.FetchInfographicsPaged(args);
  }

  @graphql.Query(() => [InfographicOutput])
  async GetInfographics(
    @graphql.Args()
    args: InfographicCreateInputNew
  ): Promise<InfographicOutput[]> {
    return this.service.GetInfographics(args);
  }

  @graphql.Mutation(() => InfographicOutput)
  async UpdateInfographic(
    @graphql.Args()
    args: InfographicUpdateInputNew
  ): Promise<InfographicOutput> {
    return this.service.UpdateInfographic(args);
  }
}
