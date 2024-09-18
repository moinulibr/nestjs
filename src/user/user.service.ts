import { Injectable, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserCreateDto } from './dto/userCreateDto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entity/userEntity';
import { Repository } from 'typeorm';
import { User } from './entity/user';

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
        return {body:userCreateDto};
    }


    //update(req,para){
        //return req;
    //}
    update(body:any,para){
        return body;
    }


    show(param){
        return param;
    }

    delete(param){
        return param;
    }

}
