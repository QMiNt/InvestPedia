import { Module } from "@nestjs/common";
import { InfographicModuleBase } from "./base/infographic.module.base";
import { InfographicService } from "./infographic.service";
import { InfographicController } from "./infographic.controller";
import { InfographicResolver } from "./infographic.resolver";

@Module({
  imports: [InfographicModuleBase],
  controllers: [InfographicController],
  providers: [InfographicService, InfographicResolver],
  exports: [InfographicService],
})
export class InfographicModule {}
