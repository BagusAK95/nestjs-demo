import { CacheModule, Module } from "@nestjs/common";
import { RedisOption } from "./redis.option";

@Module({
  imports:[
    CacheModule.registerAsync({
      useClass: RedisOption,
      isGlobal: true,
    })
  ]
})
export class RedisModule {}