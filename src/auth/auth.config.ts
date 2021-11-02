import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { JwtModuleOptions, JwtOptionsFactory } from "@nestjs/jwt";
import jwtConfig from "../config/jwt.config";

@Injectable()
export class AuthConfig implements JwtOptionsFactory {
  constructor(
    @Inject(jwtConfig.KEY)
    private config: ConfigType<typeof jwtConfig>,
  ) {}

  createJwtOptions(): JwtModuleOptions {
    return {
      ...this.config
    };
  }
}