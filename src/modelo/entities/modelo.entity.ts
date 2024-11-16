import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Evento } from 'src/eventos/entities/evento.entity';

@Entity()
export class Modelo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  // Relación muchos a 1 con Evento (un modelo solo puede estar en un evento)
  @ManyToOne(() => Evento, (evento) => evento.modelos)
  @JoinColumn() // Esto indica que `Modelo` tiene la clave foránea de `Evento`
  evento: Evento;
}
