import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './authentication/auth.module';
import { UploadModule } from './upload/upload.module';
import { HttpModule } from './common/http/http.module';
import { ProviderModule } from './providers/provider.module';
import { ModelModule } from './models/model.module';

@Module({
  imports: [
    ConfigModule,
    ProviderModule,
    AuthModule,
    ModelModule,
    UploadModule,
    HttpModule,
  ],
})
export class AppModule {}
