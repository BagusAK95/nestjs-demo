import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RedisModule } from "src/redis/redis.module";
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { UserService } from "./user.service";
import { UserSubscriber } from "./user.subscriber";

@Module({
  imports: [
    TypeOrmModule.forFeature([ User ])
  ],
  controllers: [UserController],
  providers: [UserService, UserSubscriber],
  exports: [UserService]
})
export class UserModule {}
