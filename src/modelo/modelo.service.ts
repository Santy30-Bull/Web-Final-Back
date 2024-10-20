import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modelo } from './entities/modelo.entity';

@Injectable()
export class ModeloService {
  constructor(
    @InjectRepository(Modelo)
    private readonly modeloRepository: Repository<Modelo>,
  ) {}

  // Obtener todos los modelos
  async findAll(): Promise<Modelo[]> {
    return this.modeloRepository.find();
  }

  // Obtener un modelo por ID
  async findOne(id: number): Promise<Modelo> {
    return this.modeloRepository.findOne({ where: { id } });
  }

  // Crear un nuevo modelo
  async create(modeloData: Partial<Modelo>): Promise<Modelo> {
    const newModelo = this.modeloRepository.create(modeloData);
    return this.modeloRepository.save(newModelo);
  }

  // Actualizar un modelo por ID
  async update(id: number, updateData: Partial<Modelo>): Promise<Modelo> {
    await this.modeloRepository.update(id, updateData);
    return this.findOne(id); // Devolver el modelo actualizado
  }

  // Eliminar un modelo por ID
  async remove(id: number): Promise<void> {
    await this.modeloRepository.delete(id);
  }
}
