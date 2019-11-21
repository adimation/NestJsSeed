import { Controller, Post, Body, Get, Param, ParseIntPipe } from "@nestjs/common";
import { UserDTO } from "src/dto/user/user.dto";
import { AuthService } from "src/service/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    signUp(@Body() userDTO: UserDTO) {
        return this.authService.signUp(userDTO);
    }
}
