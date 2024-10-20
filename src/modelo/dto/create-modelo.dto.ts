import { IsNotEmpty, IsString } from 'class-validator';

export class CreateModeloDto {
    @IsNotEmpty()  // Este campo es obligatorio
    @IsString()    // Valida que sea una cadena de texto
    nombre: string;

    @IsNotEmpty()  // Este campo es obligatorio
    @IsString()    // Valida que sea una cadena de texto
    descripcion: string;
}
