import { Module } from '@nestjs/common';
import { RedisModule } from './cache/redis/redis.module';
import { PostgresModule } from './database/postgres/postgres.module';

@Module({
  imports: [RedisModule, PostgresModule],
  controllers: [],
  providers: [],
})
export class ProviderModule {}
