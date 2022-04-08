import {Body, Controller, Post} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {RegisterDto} from "./register.dto";

@Controller('auth')
export class AuthController {

    constructor(private userService: UserService) {
    }

    @Post('register')
    register(@Body() data:RegisterDto){
        return data;
    }

}
