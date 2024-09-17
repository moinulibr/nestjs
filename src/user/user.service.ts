import { Injectable, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {

    getUser(){
        return "get all users from user service";
    }


    store(req){
        return req.body;
    }


    update(req,para){
        return req;
    }


    show(param){
        return param;
    }

    delete(param){
        return param;
    }

}
