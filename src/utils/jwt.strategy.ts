import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-facebook';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'my_secret_key',
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
