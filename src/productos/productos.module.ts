import { Module } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { ProductosController } from './productos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './entities/producto.entity';
import { EventosModule } from 'src/eventos/eventos.module';  // Importar EventosModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Producto]),  // Repositorio de Producto
    EventosModule,  // Importa EventosModule para poder acceder al EventoRepository
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
  exports: [ProductosService, TypeOrmModule],
})
export class ProductosModule {}
