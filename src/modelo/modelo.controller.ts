import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards} from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { Modelo } from './entities/modelo.entity';
import { AuthGuard } from '@nestjs/passport'; // Importa el guard de passport para JWT
import { CreateModeloDto } from './dto/create-modelo.dto';


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

  // Actualizar un modelo por ID
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<Modelo>): Promise<Modelo> {
    return this.modeloService.update(id, updateData);
  }

  // Eliminar un modelo por ID
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.modeloService.remove(id);
  }
}

