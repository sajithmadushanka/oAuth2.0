import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(profile: any): Promise<any> {
    // Here you would typically look up the user in your database
    // If the user exists, return the user object, otherwise, create a new user
    // For simplicity, we'll return the profile object
    return profile;
  }

  async login(user: any) {
    const payload = { username: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
