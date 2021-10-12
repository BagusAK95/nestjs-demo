import { Inject, Injectable } from "@nestjs/common";
import { ConfigType } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import databaseConfig from "../configuration/database.config";

@Injectable()
export class DatabaseConfig implements TypeOrmOptionsFactory {
  constructor(
    @Inject(databaseConfig.KEY)
    private config: ConfigType<typeof databaseConfig>,
  ) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      ...this.config,
      type: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
    };
  }
}