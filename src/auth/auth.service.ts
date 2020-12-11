import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string):Promise <any>{
    const user = await  this.usersService.findOne(username)
    if (user && user.password === pass){
      const {password, ...result} = user
      return result
    }
    return null
  }
  async login(user: any){
    // console.log(user)
    const payload = {username: user._doc.name, sub: user._doc._id}
    // console.log(payload)
    return{
      access_token: this.jwtService.sign(payload)
    }
  }
  async profile(user: string){
    console.log(user)
    return await this.usersService.findOne(user)
  }
}
