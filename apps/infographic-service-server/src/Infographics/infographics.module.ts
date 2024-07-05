import { Module } from "@nestjs/common";
import { InfographicsService } from "./infographics.service";
import { InfographicsController } from "./infographics.controller";
import { InfographicsResolver } from "./infographics.resolver";

@Module({
  controllers: [InfographicsController],
  providers: [InfographicsService, InfographicsResolver],
  exports: [InfographicsService],
})
export class InfographicsModule {}
