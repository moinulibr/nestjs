import { Injectable, Post, Req } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class UserService {

    getUser(){
        return "get all users from user service";
    }

    store(){
        return 'req';
    }
}
