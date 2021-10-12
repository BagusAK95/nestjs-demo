import { Module } from '@nestjs/common';
import { RedisModule } from './redis/redis.module';
import { ConfigurationModule } from './configuration/configuration.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigurationModule,
    DatabaseModule,
    RedisModule,
    AuthModule,
    UserModule,
  ]
})
export class AppModule {}
