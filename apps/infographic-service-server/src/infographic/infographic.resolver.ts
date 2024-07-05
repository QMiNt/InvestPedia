import * as graphql from "@nestjs/graphql";
import { InfographicResolverBase } from "./base/infographic.resolver.base";
import { Infographic } from "./base/Infographic";
import { InfographicService } from "./infographic.service";

@graphql.Resolver(() => Infographic)
export class InfographicResolver extends InfographicResolverBase {
  constructor(protected readonly service: InfographicService) {
    super(service);
  }
}
