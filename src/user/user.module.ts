import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/userEntity';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entity/user';

@Module({
    controllers:[UserController],
    providers:[UserService],
    imports:[TypeOrmModule.forFeature([User])]
})
export class UserModule {}
