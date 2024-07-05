import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InfographicService } from "./infographic.service";
import { InfographicControllerBase } from "./base/infographic.controller.base";

@swagger.ApiTags("infographics")
@common.Controller("infographics")
export class InfographicController extends InfographicControllerBase {
  constructor(protected readonly service: InfographicService) {
    super(service);
  }
}
