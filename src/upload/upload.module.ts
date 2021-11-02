import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadController } from './upload.controller';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: () => ({
        dest: './upload',
        limits: {
          fileSize:
            1 * Math.pow(1000, 2), // 10 Megabyte
        }
      }),
    }),
  ],
  controllers: [UploadController],
})
export class UploadModule {}
