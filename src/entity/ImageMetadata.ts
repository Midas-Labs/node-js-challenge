import { BaseEntity, Column, CreateDateColumn, Entity,JoinColumn,ManyToOne,PrimaryGeneratedColumn } from "typeorm";


@Entity('imageMetadata')
export class ImageMetadata extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    image_Url: string;

    @CreateDateColumn()
    timestamp: Date;

    @Column()
    user_AuthId: string;
}