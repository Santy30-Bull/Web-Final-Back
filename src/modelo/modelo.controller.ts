import { Controller, Get, Post, Body, Param, Put, Delete, Patch } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { Modelo } from './entities/modelo.entity';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';  // Importar DTO para actualizaciones

@Controller('modelos')
export class ModeloController {
  constructor(private readonly modeloService: ModeloService) {}

  // Obtener todos los modelos
  @Get()
  async findAll(): Promise<Modelo[]> {
    return this.modeloService.findAll();
  }

  // Obtener un modelo por ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Modelo> {
    return this.modeloService.findOne(id);
  }

  // Crear un nuevo modelo
  @Post()
  async create(@Body() createModeloDto: CreateModeloDto) {
    return this.modeloService.create(createModeloDto);
  }

  // Actualizar un modelo por ID (actualización completa)
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: UpdateModeloDto): Promise<Modelo> {
    return this.modeloService.update(id, updateData);
  }

  // Eliminar un modelo por ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.modeloService.remove(id);
  }

  // Actualizar parcialmente un modelo por ID (usado para asignar un evento, por ejemplo)
  @Patch(':id')
  async partialUpdate(@Param('id') id: number, @Body() partialUpdate: UpdateModeloDto): Promise<Modelo> {
    return this.modeloService.partialUpdate(id, partialUpdate);
  }
}

