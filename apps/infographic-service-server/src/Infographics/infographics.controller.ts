import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { InfographicsService } from "./infographics.service";
import { InfographicUpdateInputNew } from "../infographics/InfographicUpdateInputNew";
import { InfographicOutput } from "../infographics/InfographicOutput";

@swagger.ApiTags("infographics")
@common.Controller("infographics")
export class InfographicsController {
  constructor(protected readonly service: InfographicsService) {}

  @common.Post("/infographics")
  @swagger.ApiOkResponse({
    type: InfographicOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateInfographic(
    @common.Body()
    body: InfographicUpdateInputNew
  ): Promise<InfographicOutput> {
        return this.service.CreateInfographic(body);
      }

  @common.Delete("/infographics/:id")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteInfographic(
    @common.Body()
    body: InfographicUpdateInputNew
  ): Promise<string> {
        return this.service.DeleteInfographic(body);
      }

  @common.Get("/infographics/:id/download")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DownloadInfographic(
    @common.Body()
    body: InfographicUpdateInputNew
  ): Promise<string> {
        return this.service.DownloadInfographic(body);
      }

  @common.Get("/infographics/paged")
  @swagger.ApiOkResponse({
    type: InfographicOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchInfographicsPaged(
    @common.Body()
    body: InfographicUpdateInputNew
  ): Promise<InfographicOutput[]> {
        return this.service.FetchInfographicsPaged(body);
      }

  @common.Get("/infographics")
  @swagger.ApiOkResponse({
    type: InfographicOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetInfographics(
    @common.Body()
    body: InfographicUpdateInputNew
  ): Promise<InfographicOutput[]> {
        return this.service.GetInfographics(body);
      }

  @common.Put("/infographics/:id")
  @swagger.ApiOkResponse({
    type: InfographicOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateInfographic(
    @common.Body()
    body: InfographicUpdateInputNew
  ): Promise<InfographicOutput> {
        return this.service.UpdateInfographic(body);
      }
}
