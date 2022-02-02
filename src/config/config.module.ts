import { Module } from "@nestjs/common";
import { ConfigModule as NestConfigModule } from "@nestjs/config";
import databaseConfig from "./database/database.config";
import httpConfig from "./http/http.config";
import jwtConfig from "./jwt/jwt.config";
import rabbitmqConfig from "./queue/rabbitmq.config";
import redisConfig from "./cache/redis.config";

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