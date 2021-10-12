import { CacheInterceptor, CacheModule, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { RedisConfig } from "./redis.config";

@Module({
  imports:[
    CacheModule.registerAsync({
      useClass: RedisConfig,
      isGlobal: true,
    })
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ]
})
export class RedisModule {}