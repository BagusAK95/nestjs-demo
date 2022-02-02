import { Injectable } from '@nestjs/common';
import { HttpService } from '../common/http/http.service';
import * as FormData from 'form-data';
import * as fs from 'fs';
import { IUpload } from './interfaces/upload.interface';

@Injectable()
export class UploadService {
  constructor(private httpService: HttpService) {}

  async upload(filePath: string): Promise<IUpload> {
    const getServer = await this.httpService.get(
      'https://api.gofile.io/getServer',
    );
    const server = getServer.data.data.server;

    const formData = new FormData();
    formData.append('file', fs.createReadStream(filePath));

    const uploadFile = await this.httpService.post(
      `https://${server}.gofile.io/uploadFile`,
      formData,
      {
        headers: formData.getHeaders(),
      },
    );

    fs.unlinkSync(filePath);
    
    return { fileUrl: uploadFile.data.data.downloadPage };
  }
}
