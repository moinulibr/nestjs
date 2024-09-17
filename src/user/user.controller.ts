import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Get()
    get():string{
        return this.userService.getUser();
    }

    @Post()
    store(@Req() req: Request){
        return this.userService.store(req);
    }

    @Get('/:id')
    show(@Param() param : {id:number}){
        return this.userService.show(param);
    }

    @Delete('/:id')
    delete(@Param() param: {id:number}){
        return this.userService.delete(param);
    }

    @Patch('/:id')
    update(@Req() req: Request, @Param() param:{id:number}){
        return this.userService.update(req, param);
    }

}
