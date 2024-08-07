/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { InfographicService } from "../infographic.service";
import { InfographicCreateInput } from "./InfographicCreateInput";
import { Infographic } from "./Infographic";
import { InfographicFindManyArgs } from "./InfographicFindManyArgs";
import { InfographicWhereUniqueInput } from "./InfographicWhereUniqueInput";
import { InfographicUpdateInput } from "./InfographicUpdateInput";

export class InfographicControllerBase {
  constructor(protected readonly service: InfographicService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Infographic })
  async createInfographic(
    @common.Body() data: InfographicCreateInput
  ): Promise<Infographic> {
    return await this.service.createInfographic({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        image: true,
        numberOfDownloads: true,
        tag: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Infographic] })
  @ApiNestedQuery(InfographicFindManyArgs)
  async infographics(@common.Req() request: Request): Promise<Infographic[]> {
    const args = plainToClass(InfographicFindManyArgs, request.query);
    return this.service.infographics({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        image: true,
        numberOfDownloads: true,
        tag: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Infographic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async infographic(
    @common.Param() params: InfographicWhereUniqueInput
  ): Promise<Infographic | null> {
    const result = await this.service.infographic({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        image: true,
        numberOfDownloads: true,
        tag: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Infographic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInfographic(
    @common.Param() params: InfographicWhereUniqueInput,
    @common.Body() data: InfographicUpdateInput
  ): Promise<Infographic | null> {
    try {
      return await this.service.updateInfographic({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          image: true,
          numberOfDownloads: true,
          tag: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Infographic })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInfographic(
    @common.Param() params: InfographicWhereUniqueInput
  ): Promise<Infographic | null> {
    try {
      return await this.service.deleteInfographic({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          image: true,
          numberOfDownloads: true,
          tag: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
