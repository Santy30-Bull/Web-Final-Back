import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FotosService } from './fotos.service';
import { Foto } from './entities/foto.entity';
import { CreateFotoDto } from './dto/create-foto.dto';

@Controller('fotos')
export class FotosController {
  constructor(private readonly fotosService: FotosService) {}

  @Post()
  async create(@Body() createFotoDto: CreateFotoDto) {
    return this.fotosService.create(createFotoDto);
  }

  @Get()
  async findAll(): Promise<Foto[]> {
    return this.fotosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Foto> {
    return this.fotosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() replaceFotoDto: CreateFotoDto) {
    return this.fotosService.update(id, replaceFotoDto);
  }

  @Patch(':id')
  async partialUpdate(@Param('id') id: number, @Body() partialUpdate: Partial<Foto>): Promise<Foto> {
    return this.fotosService.partialUpdate(id, partialUpdate);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.fotosService.remove(id);
  }
}
