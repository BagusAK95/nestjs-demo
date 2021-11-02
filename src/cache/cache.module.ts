import { CacheModule as NestCacheModule, Module } from "@nestjs/common";
import { CacheConfig } from "./cache.config";

@Module({
  imports:[
    NestCacheModule.registerAsync({
      useClass: CacheConfig,
      isGlobal: true,
    })
  ]
})
export class CacheModule {}