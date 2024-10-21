import { Modelo } from "src/modelo/entities/modelo.entity";
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column('text',{unique:true})
    email:string;


    @Column('text')
    password:string;

    @Column('bool',{default:true})
    isActive:boolean;
    
    @Column('text',{
        default:'user'
    })
    fullName:string;
    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

    @OneToMany(() => Modelo, modelo => modelo.user)
    modelos: Modelo[];

    // Aqui irian las relaciones con las demas entidades, faltan varias relaciones

    @BeforeInsert()
    emailToLowerCase() {
        this.email = this.email.toLowerCase();
    }

}
