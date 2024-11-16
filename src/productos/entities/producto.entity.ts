import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 }) // Limitamos el tamaño del nombre
    nombre: string;

    @Column('text')
    descripcion: string;

    @Column('decimal', { precision: 10, scale: 2 }) // Definimos precisión para precios (por ejemplo, 99999999.99)
    precio: number;

    @Column('int') // Especificamos que es un entero
    stock: number;

    @Column({ default: true }) // Estado por defecto activo
    estado: boolean;

    @CreateDateColumn() // Fecha automática al crear
    fechaCreacion: Date;

    @UpdateDateColumn() // Fecha automática al actualizar
    fechaActualizacion: Date;
}

