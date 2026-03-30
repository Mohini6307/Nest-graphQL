import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { DbController } from './db.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './db.config';


@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
  ],
  controllers: [DbController],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule { }
