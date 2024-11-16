import { IsString, IsNumber, IsBoolean, Min, Length } from 'class-validator';

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
    estado: boolean;
}

