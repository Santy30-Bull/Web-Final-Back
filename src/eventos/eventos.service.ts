import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evento } from './entities/evento.entity';
import { Producto } from 'src/productos/entities/producto.entity';
import { Modelo } from 'src/modelo/entities/modelo.entity';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Injectable()
export class EventosService {
  constructor(
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,

    @InjectRepository(Producto)
    private readonly productoRepository: Repository<Producto>,

    @InjectRepository(Modelo)
    private readonly modeloRepository: Repository<Modelo>,
  ) {}

  // Crear un nuevo evento
  async create(createEventoDto: CreateEventoDto): Promise<Evento> {
    const { ModeloId, ProductosId, ...eventoData } = createEventoDto;

    const evento = this.eventoRepository.create(eventoData); // Crear el evento

    // Si se proporcionan IDs de modelos, asociarlos al evento
    if (ModeloId && ModeloId.length) {
      const modelos = await this.modeloRepository.findByIds(ModeloId);
      evento.modelos = modelos; // Asociar modelos al evento
    }

    // Si se proporcionan IDs de productos, asociarlos al evento
    if (ProductosId && ProductosId.length) {
      const productos = await this.productoRepository.findByIds(ProductosId);
      evento.productos = productos; // Asociar productos al evento
    }

    return this.eventoRepository.save(evento); // Guardar el evento
  }

  // Obtener todos los eventos
  async findAll(): Promise<Evento[]> {
    return this.eventoRepository.find({
      relations: ['productos', 'modelos'], // Cargar relaciones de productos y modelos
    });
  }

  // Obtener un evento por ID
  async findOne(id: number): Promise<Evento> {
    const evento = await this.eventoRepository.findOne({
      where: { id },
      relations: ['productos', 'modelos'], // Cargar relaciones de productos y modelos
    });
    if (!evento) {
      throw new NotFoundException(`Evento con ID ${id} no encontrado`);
    }
    return evento;
  }

  // Actualizar un evento por ID
  async update(id: number, updateEventoDto: UpdateEventoDto): Promise<Evento> {
    const evento = await this.findOne(id); // Obtener el evento existente

    // Actualizar los datos básicos del evento
    Object.assign(evento, updateEventoDto);

    // Si se proporcionan nuevos IDs de modelos, actualizar las relaciones
    if (updateEventoDto.ModeloId && updateEventoDto.ModeloId.length) {
      const modelos = await this.modeloRepository.findByIds(updateEventoDto.ModeloId);
      evento.modelos = modelos; // Actualizar los modelos relacionados
    }

    // Si se proporcionan nuevos IDs de productos, actualizar las relaciones
    if (updateEventoDto.ProductosId && updateEventoDto.ProductosId.length) {
      const productos = await this.productoRepository.findByIds(updateEventoDto.ProductosId);
      evento.productos = productos; // Actualizar los productos relacionados
    }

    return this.eventoRepository.save(evento); // Guardar los cambios
  }

  // Eliminar un evento por ID
  async remove(id: number): Promise<void> {
    const evento = await this.findOne(id); // Verificar que el evento existe
    await this.eventoRepository.remove(evento); // Eliminar el evento
  }
}
