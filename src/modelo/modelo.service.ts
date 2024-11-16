import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modelo } from './entities/modelo.entity';
import { Evento } from 'src/eventos/entities/evento.entity';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';

@Injectable()
export class ModeloService {
  constructor(
    @InjectRepository(Modelo)
    private readonly modeloRepository: Repository<Modelo>,
    @InjectRepository(Evento)
    private readonly eventoRepository: Repository<Evento>,
  ) {}

  // Obtener todos los modelos
  async findAll(): Promise<Modelo[]> {
    return this.modeloRepository.find({ relations: ['evento'] });
  }

  // Obtener un modelo por ID
  async findOne(id: number): Promise<Modelo> {
    return this.modeloRepository.findOne({ where: { id }, relations: ['evento'] });
  }

  // Crear un nuevo modelo
  async create(createModeloDto: CreateModeloDto): Promise<Modelo> {
    const { eventoId, ...modeloData } = createModeloDto;
    const newModelo = this.modeloRepository.create(modeloData);

    if (eventoId) {
      const evento = await this.eventoRepository.findOne({ where: { id: eventoId } });
      if (evento) {
        newModelo.evento = evento;
      } else {
        throw new Error('Evento no encontrado');
      }
    }

    return this.modeloRepository.save(newModelo);
  }

  // Actualizar un modelo
  async update(id: number, updateData: UpdateModeloDto): Promise<Modelo> {
    const modelo = await this.findOne(id);

    if (updateData.eventoId) {
      const evento = await this.eventoRepository.findOne({ where: { id: updateData.eventoId } });
      if (evento) {
        modelo.evento = evento;
      } else {
        throw new Error('Evento no encontrado');
      }
    }

    Object.assign(modelo, updateData);
    return this.modeloRepository.save(modelo);
  }

  // Actualizar parcialmente un modelo
  async partialUpdate(id: number, partialUpdate: UpdateModeloDto): Promise<Modelo> {
    const modelo = await this.findOne(id);

    if (partialUpdate.eventoId) {
      const evento = await this.eventoRepository.findOne({ where: { id: partialUpdate.eventoId } });
      if (evento) {
        modelo.evento = evento;
      } else {
        throw new Error('Evento no encontrado');
      }
    }

    Object.assign(modelo, partialUpdate);
    return this.modeloRepository.save(modelo);
  }

  // Eliminar un modelo por ID
  async remove(id: number): Promise<void> {
    await this.modeloRepository.delete(id);
  }
}
