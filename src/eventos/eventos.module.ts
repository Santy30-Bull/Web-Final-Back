import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evento } from './entities/evento.entity';  // Importa la entidad Evento
import { Producto } from 'src/productos/entities/producto.entity';  // Importa la entidad Producto
import { Modelo } from 'src/modelo/entities/modelo.entity';  // Importa la entidad Modelo
import { EventosService } from './eventos.service';
import { EventosController } from './eventos.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Evento, Producto, Modelo]),
  ],
  controllers: [EventosController],
  providers: [EventosService],
  exports: [EventosService, TypeOrmModule],
})
export class EventosModule {}
