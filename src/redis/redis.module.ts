import { CacheModule, Module } from "@nestjs/common";
import { RedisConfig } from "./redis.config";

@Module({
  imports:[
    CacheModule.registerAsync({
      useClass: RedisConfig,
      isGlobal: true,
    })
  ]
})
export class RedisModule {}