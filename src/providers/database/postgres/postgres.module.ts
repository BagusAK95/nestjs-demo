import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostgresOption } from "./postgres.option";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: PostgresOption,
    })
  ],
  controllers: [],
  providers: [],
})
export class PostgresModule {}