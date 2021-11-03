import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import httpConfig from '../config/http.config';
import * as axios from 'axios';

@Injectable()
export class HttpService {
  private instance: axios.AxiosInstance;

  constructor(
    @Inject(httpConfig.KEY)
    private config: ConfigType<typeof httpConfig>,
  ) {
    this.instance = axios.default.create(this.config);
  }

  async request(
    config: axios.AxiosRequestConfig,
  ): Promise<axios.AxiosResponse> {
    return await this.instance.request(config);
  }

  async get(
    url: string,
    config?: axios.AxiosRequestConfig,
  ): Promise<axios.AxiosResponse> {
    return await this.instance.get(url, config);
  }

  async delete(
    url: string,
    config?: axios.AxiosRequestConfig,
  ): Promise<axios.AxiosResponse> {
    return await this.instance.delete(url, config);
  }

  async head(
    url: string,
    config?: axios.AxiosRequestConfig,
  ): Promise<axios.AxiosResponse> {
    return await this.instance.delete(url, config);
  }

  async post(
    url: string,
    data?: any,
    config?: axios.AxiosRequestConfig,
  ): Promise<axios.AxiosResponse> {
    return await this.instance.post(url, data, config);
  }

  async put(
    url: string,
    data?: any,
    config?: axios.AxiosRequestConfig,
  ): Promise<axios.AxiosResponse> {
    return await this.instance.put(url, data, config);
  }

  async patch(
    url: string,
    data?: any,
    config?: axios.AxiosRequestConfig,
  ): Promise<axios.AxiosResponse> {
    return await this.instance.patch(url, data, config);
  }
}
