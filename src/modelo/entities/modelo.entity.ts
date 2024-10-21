import { Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import { User } from "src/auth/entities/auth.entity";

@Entity()
export class Modelo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column('text')
  descripcion: string;

  @ManyToOne(()=>User,user=>user.modelos)
  user?:User;

  // aqui irian las relaciones con las demas entidades, faltan varias relaciones
}
