import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column({length:20})
    name:string

    @Column()
    email:string

    @Column({default:null})
    password:string

    @Column({length:15, default:null})
    phone:string

    @Column({default:true,comment:'true = active, false = inactive'})
    isActive:boolean
}