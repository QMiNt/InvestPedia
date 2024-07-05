import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InfographicServiceBase } from "./base/infographic.service.base";

@Injectable()
export class InfographicService extends InfographicServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
