import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class CreateModeloDto {
    @IsNotEmpty()  // Este campo es obligatorio
    @IsString()    // Valida que sea una cadena de texto
    nombre: string;

    @IsNotEmpty()  // Este campo es obligatorio
    @IsString()    // Valida que sea una cadena de texto
    descripcion: string;

    @IsOptional()  // Este campo es opcional
    @IsNumber()    // Asegura que es un número (ID del evento)
    eventoId?: number;  // Si el evento no es proporcionado, no se asignará al modelo
}
