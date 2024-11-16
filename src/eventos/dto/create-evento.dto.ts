import { IsString, IsOptional, IsArray, IsNumber } from 'class-validator';

export class CreateEventoDto {
    @IsString()
    nombre: string;

    @IsString()
    descripcion: string;

    @IsOptional()
    @IsString()
    lugar?: string;

    @IsOptional()
    @IsString()
    fecha?: string;

    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    ModeloId?: number[];
    
    // Si un evento puede tener múltiples productos, esto es correcto
    @IsOptional()
    @IsArray()
    @IsNumber({}, { each: true })
    ProductosId?: number[];
}
