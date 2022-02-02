import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { HttpModule } from '../common/http/http.module';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: '/tmp',
        limits: {
          fileSize:
            1 * Math.pow(1000, 2), // 10 Megabyte
        }
      }),
    }),
    HttpModule
  ],
  controllers: [UploadController],
  providers: [UploadService],
  exports: [UploadService]
})
export class UploadModule {}
