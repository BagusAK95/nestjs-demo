import { CacheModuleOptions, CacheOptionsFactory, Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import redisConfig from "../../../config/cache/redis.config";
import * as redisStore from 'cache-manager-redis-store';

@Injectable()
export class RedisOption implements CacheOptionsFactory {
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