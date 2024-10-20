import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Modelo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;
}
