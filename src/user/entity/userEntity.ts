import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    name:string;

    @Column()
    email:string

    @Column()
    password:string

    @Column({default:true,comment:'true is active, false is inactive'})
    isActive:boolean

}