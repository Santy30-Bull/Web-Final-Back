import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloService } from './modelo.service';
import { ModeloController } from './modelo.controller';
import { Modelo } from './entities/modelo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Modelo])],
  providers: [ModeloService],
  controllers: [ModeloController],
})
export class ModeloModule {}
