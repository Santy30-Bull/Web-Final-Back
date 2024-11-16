import { IsString, IsNumber, IsBoolean, Min, Length, IsOptional, IsArray } from 'class-validator';

export class CreateProductoDto {
    @IsString()
    @Length(1, 100)
    nombre: string;

    @IsString()
    descripcion: string;

    @IsNumber()
    @Min(0)
    precio: number;

    @IsNumber()
    @Min(0)
    stock: number;

    @IsBoolean()
    @IsOptional()  // Hace que este campo sea opcional (el valor por defecto es 'true' en la entidad)
    estado?: boolean;

    @IsArray()
    @IsNumber({}, { each: true })  // Cada elemento del array debe ser un número
    @IsOptional()  // Este campo es opcional, pero puede ser proporcionado para asociar un producto a un evento
    eventosId?:  number[];
}
