import { Module } from '@nestjs/common';
import { CacheModule } from './cache/cache.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    CacheModule,
    AuthModule,
    UserModule,
    UploadModule
  ]
})
export class AppModule {}
