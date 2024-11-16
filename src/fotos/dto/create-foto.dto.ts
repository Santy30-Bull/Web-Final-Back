import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateFotoDto {
    
    @IsNotEmpty()  // Este campo es obligatorio
    @IsString()    // Valida que sea una cadena de texto
    titulo: string;

    @IsNotEmpty()  // Este campo es obligatorio
    @IsString()    // Valida que sea una cadena de texto
    descripcion: string;

    @IsNotEmpty()  // Este campo es obligatorio
    precioDigital: number;

    @IsNotEmpty()  // Este campo es obligatorio
    precioImpresa: number;

    @IsNotEmpty()  // Este campo es obligatorio
    url: string;   // Campo que representa la URL de la foto
}
