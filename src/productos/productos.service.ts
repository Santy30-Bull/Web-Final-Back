import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './entities/producto.entity';
import { Evento } from 'src/eventos/entities/evento.entity'; 
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,

    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  // Obtener todos los productos
  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find({ relations: ['eventos'] }); // Cargar los eventos relacionados
  }

  // Obtener un producto por ID
  async findOne(id: number): Promise<Producto> {
    return this.productoRepository.findOne({ where: { id }, relations: ['eventos'] });
  }

  // Crear un nuevo producto
  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const { eventosId, ...productoData } = createProductoDto;

    // Crear el nuevo producto
    const newProducto = this.productoRepository.create(productoData);

    // Si se pasan IDs de eventos, asociar esos eventos al producto
    if (eventosId && eventosId.length > 0) {
      const eventos = await this.eventoRepository.findByIds(eventosId);
      newProducto.eventos = eventos; // Aquí asignamos la relación muchos a muchos
    }

    // Guardar el producto
    return this.productoRepository.save(newProducto);
  }

  // Actualizar un producto por ID
  async update(id: number, updateData: Partial<Producto>): Promise<Producto> {
    const producto = await this.findOne(id);

    // Si se pasan eventosId en la actualización, asociar esos eventos al producto
    if (updateData.eventos) {
      const eventos = await this.eventoRepository.findByIds(updateData.eventos.map(evento => evento.id));
      producto.eventos = eventos; // Actualizar la relación de eventos
    }

    // Actualizar los datos del producto
    Object.assign(producto, updateData);

    return this.productoRepository.save(producto);
  }

  // Eliminar un producto por ID
  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }

  // Actualizar parcialmente un producto
  async partialUpdate(id: number, partialUpdate: Partial<Producto>): Promise<Producto> {
    const producto = await this.findOne(id);

    // Si se pasan eventosId en la actualización parcial, asociar esos eventos al producto
    if (partialUpdate.eventos) {
      const eventos = await this.eventoRepository.findByIds(partialUpdate.eventos.map(evento => evento.id));
      producto.eventos = eventos; // Actualizar la relación de eventos
    }

    // Actualizar parcialmente los datos del producto
    Object.assign(producto, partialUpdate);

    return this.productoRepository.save(producto);
  }
}
