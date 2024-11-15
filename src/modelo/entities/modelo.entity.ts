import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';


@Entity()
export class Modelo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  // aqui irian las relaciones con las demas entidades, faltan varias relaciones
}
