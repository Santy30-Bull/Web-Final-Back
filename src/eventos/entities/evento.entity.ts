import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Modelo } from 'src/modelo/entities/modelo.entity';
import { Producto } from 'src/productos/entities/producto.entity';

@Entity()
export class Evento {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    @Column({ nullable: true })
    lugar: string;

    @Column({ nullable: true })
    fecha: string;

    // Relación Muchos a Muchos con productos
    @ManyToMany(() => Producto, (producto) => producto.eventos)
    @JoinTable() // Esto creará la tabla de unión entre Producto y Evento
    productos: Producto[];

    // Relación 1 a muchos con Modelos (un evento puede tener muchos modelos)
    @OneToMany(() => Modelo, (modelo) => modelo.evento)
    modelos: Modelo[];
}
