import { CacheModule as NestCacheModule, Module } from "@nestjs/common";
import { RedisOption } from "./redis.option";

@Module({
  imports:[
    NestCacheModule.registerAsync({
      useClass: RedisOption,
      isGlobal: true,
    })
  ]
})
export class RedisModule {}