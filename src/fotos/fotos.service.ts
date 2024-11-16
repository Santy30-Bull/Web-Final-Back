import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Foto } from './entities/foto.entity';

@Injectable()
export class FotosService {
  constructor(
    @InjectRepository(Foto)
    private readonly fotoRepository: Repository<Foto>,
  ) {}

  // Obtener todas las fotos
  async findAll(): Promise<Foto[]> {
    return this.fotoRepository.find();
  }

  // Obtener una foto por ID
  async findOne(id: number): Promise<Foto> {
    return this.fotoRepository.findOne({ where: { id } });
  }

  // Crear una nueva foto
  async create(fotoData: Partial<Foto>): Promise<Foto> {
    const newFoto = this.fotoRepository.create(fotoData);
    return this.fotoRepository.save(newFoto);
  }

  // Actualizar una foto por ID
  async update(id: number, updateData: Partial<Foto>): Promise<Foto> {
    await this.fotoRepository.update(id, updateData);
    return this.findOne(id); // Devolver la foto actualizada
  }

  // Eliminar una foto por ID
  async remove(id: number): Promise<void> {
    await this.fotoRepository.delete(id);
  }

  // Actualizar parcialmente una foto
  async partialUpdate(id: number, partialUpdate: Partial<Foto>): Promise<Foto> {
    await this.fotoRepository.update(id, partialUpdate);
    return this.findOne(id); // Devolver la foto actualizada
  }
  
}
