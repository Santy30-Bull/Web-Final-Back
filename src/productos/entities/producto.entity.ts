import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable } from 'typeorm';
import { Evento } from 'src/eventos/entities/evento.entity';

@Entity()
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    nombre: string;

    @Column('text')
    descripcion: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precio: number;

    @Column('int')
    stock: number;

    @Column({ default: true })
    estado: boolean;

    @CreateDateColumn()
    fechaCreacion: Date;

    @UpdateDateColumn()
    fechaActualizacion: Date;

    // Relación Muchos a Muchos con Evento
    @ManyToMany(() => Evento)
    @JoinTable() // Esto indica que se utilizará una tabla de unión para esta relación
    eventos: Evento[];
}
