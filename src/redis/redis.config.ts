import { CacheModuleOptions, CacheOptionsFactory, Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import redisConfig from "../configuration/redis.config";
import * as redisStore from 'cache-manager-redis-store';

@Injectable()
export class RedisConfig implements CacheOptionsFactory {
  constructor(
    @Inject(redisConfig.KEY)
    private config: ConfigType<typeof redisConfig>,
  ) {}

  createCacheOptions(): CacheModuleOptions {
    return {
      ...this.config,
      store: redisStore
    };
  }
}