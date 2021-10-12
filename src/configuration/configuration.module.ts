import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import databaseConfig from "./database.config";
import jwtConfig from "./jwt.config";
import rabbitmqConfig from "./rabbitmq.config";
import redisConfig from "./redis.config";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [
        databaseConfig,
        rabbitmqConfig,
        redisConfig,
        jwtConfig
      ],
      isGlobal: true
    }),
  ]
})
export class ConfigurationModule {}