import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Foto {
    @PrimaryGeneratedColumn()  // ID generado automáticamente
    id: number;

    @Column()  // URL de la foto
    url: string;

    @Column()  // Título de la foto
    titulo: string;

    @Column()  // Descripción de la foto
    descripcion: string;

    @Column()  // Precio digital
    precioDigital: number;

    @Column()  // Precio impreso
    precioImpresa: number;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })  // Fecha de creación automática
    fechaCreacion: Date;

    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })  // Fecha de actualización automática
    fechaActualizacion: Date;

    @Column({ default: true })  // Estado por defecto como "activo"
    estado: boolean;
}
