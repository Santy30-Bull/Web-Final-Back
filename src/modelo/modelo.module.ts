import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloService } from './modelo.service';
import { ModeloController } from './modelo.controller';
import { Modelo } from './entities/modelo.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Modelo]),AuthModule],
  providers: [ModeloService],
  controllers: [ModeloController],
  exports: [ModeloService,TypeOrmModule],
})
export class ModeloModule {}
