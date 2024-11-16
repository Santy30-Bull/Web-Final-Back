import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';


@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,
  ){}

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    return this.productoRepository.findOne({ where: { id } });
  }

  async create(productoData: Partial<Producto>): Promise<Producto> {
    const newProducto = this.productoRepository.create(productoData);
    return this.productoRepository.save(newProducto);
  }

  async update(id: number, updateData: Partial<Producto>): Promise<Producto> {
    await this.productoRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }

  async partialUpdate(id: number, partialUpdate: Partial<Producto>): Promise<Producto> {
    await this.productoRepository.update(id, partialUpdate);
    return this.findOne(id);
  }

}
