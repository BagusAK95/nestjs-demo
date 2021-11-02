import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import databaseConfig from "./database.config";
import httpConfig from "./http.config";
import jwtConfig from "./jwt.config";
import rabbitmqConfig from "./rabbitmq.config";
import redisConfig from "./redis.config";

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [
        databaseConfig,
        rabbitmqConfig,
        redisConfig,
        jwtConfig,
        httpConfig
      ],
      isGlobal: true
    }),
  ]
})
export class ConfigModule {}