import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from './dto/userCreateDto.dto';

@Controller('user')
export class UserController {

    constructor(private userService:UserService){}

    @Get()
    get():string{
        return this.userService.getUser();
    }

    //@Post()
    //store(@Req() req: Request){
        //return this.userService.store(req);
    //}
    //we can use Body against of Req
    //@Post()
    //store(@Body() body: any){
        //return this.userService.store(body);
    //}

    //we can use dto for handling payload in proper way
    //introduce with dto
    //@Post()
    //store(@Body() userCreateDto:{name:string, email:string}){
        //return this.userService.store(userCreateDto);
    //}
    //custom Dto
    @Post()
    store(@Body() userCreateDto:UserCreateDto){
        return this.userService.store(userCreateDto);
    }


    //@Get('/:id')
    //show(@Param() param : {id:number}){
        //return this.userService.show(param);
    //}

    //pipe params validation
    @Get('/:id')
    show(@Param('id',ParseIntPipe) id:number){
        return this.userService.show(id);
    }


    //@Delete('/:id')
    //delete(@Param() param: {id:number}){
        //return this.userService.delete(param);
    //}
    @Delete('/:id')
    delete(@Param('id',ParseIntPipe) id:number){
        return this.userService.delete(id);
    }


    //@Patch('/:id')
    //update(@Req() req: Request, @Param() param:{id:number}){
        //return this.userService.update(req, param);
    //}
    @Patch('/:id')
    update(@Body() body: any, @Param() param:{id:number}){
        return this.userService.update(body, param);
    }
}
