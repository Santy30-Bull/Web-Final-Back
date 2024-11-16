import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { EventosService } from './eventos.service';
import { CreateEventoDto } from './dto/create-evento.dto';
import { UpdateEventoDto } from './dto/update-evento.dto';

@Controller('eventos')
export class EventosController {
  constructor(private readonly eventosService: EventosService) {}

  // Crear un nuevo evento
  @Post()
  async create(@Body() createEventoDto: CreateEventoDto) {
    return this.eventosService.create(createEventoDto);
  }

  // Obtener todos los eventos
  @Get()
  async findAll() {
    return this.eventosService.findAll();
  }

  // Obtener un evento por ID
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.eventosService.findOne(id);
  }

  // Actualizar un evento por ID
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number, 
    @Body() updateEventoDto: UpdateEventoDto
  ) {
    return this.eventosService.update(id, updateEventoDto);
  }

  // Eliminar un evento por ID
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.eventosService.remove(id);
  }
}
