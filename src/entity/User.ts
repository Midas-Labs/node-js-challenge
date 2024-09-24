import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm"
import { ImageMetadata } from "./ImageMetadata"
import { ObjectType, Field, ID } from "type-graphql"

@Entity()
@ObjectType()
export class User extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number

    @Field(() => String)
    @Column()
    name: string

    @Field(() => String)
    @Column()
    email_Id: string

    @Field(() => String)
    @Column()
    auth0Id: string


}
