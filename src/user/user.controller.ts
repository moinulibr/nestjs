import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Get()
    getUser():string{
        return this.userService.getUser();
    }

    @Post()
    storeUser(@Req() req:Request){
        return this.userService.store();
    }

    @Get('/:id')
    showUser(@Param() params : {id:number}){
        return params;
    }

    @Delete('/:id')
    deleteUser(@Param() params: {id:number}){
        return params
    }

    @Patch('/:id')
    updateUser(@Param() params:{id:number},@Req() req:Request){
        return req;
        return params;
    }

}
