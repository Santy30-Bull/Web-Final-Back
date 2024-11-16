import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModeloService } from './modelo.service';
import { ModeloController } from './modelo.controller';
import { Modelo } from './entities/modelo.entity';
import { EventosModule } from 'src/eventos/eventos.module';  // Importa EventosModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Modelo]),  // Esto es para ModeloRepository
    EventosModule,  // Esto importa EventosModule para poder usar EventoRepository
  ],
  providers: [ModeloService],
  controllers: [ModeloController],
  exports: [ModeloService, TypeOrmModule],  // Exportas el ModeloService si se necesita en otro módulo
})
export class ModeloModule {}
