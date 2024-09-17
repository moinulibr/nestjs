import { Injectable, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { UserCreateDto } from './dto/userCreateDto.dto';

@Injectable()
export class UserService {

    getUser(){
        return "get all users from user service";
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
