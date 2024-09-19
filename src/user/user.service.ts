import { Injectable, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserCreateDto } from './dto/userCreateDto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/userEntity';
import { Repository } from 'typeorm';
import { User } from './entity/user';
import { UserUpdateDto } from './dto/userUpdateDto.dto';

@Injectable()
export class UserService {

    constructor(@InjectRepository(User)
        private userRepository:Repository<User>
    ){}


    getUser(): Promise<User[]> {
        return this.userRepository.find();
    }

    //store(req){
        //return req.body;
    //}
    //store(body:any){
        //return body;
    //}
    //store(userCreateDto:{name:string, email:string}){
        //return {body:userCreateDto};
    //}
    store(userCreateDto:UserCreateDto){
        return this.userRepository.save(userCreateDto);
        //return {body:userCreateDto};
    }


    //update(req,para){
        //return req;
    //}
    update(userUpdateDot:UserUpdateDto,id:number){
        return this.userRepository.update(id,userUpdateDot);
    }


    // show(param:number){
    show(id:number){
        //return this.userRepository.findOne({where:{id:param}});
        return this.userRepository.findOne({where:{id}});
    }

    delete(param:number){
        return this.userRepository.delete(param);
    }

}
