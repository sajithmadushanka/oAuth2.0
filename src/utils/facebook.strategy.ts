import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-facebook';
import { ConfigService } from '@nestjs/config';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {
    super({
      clientID: '828936549151783',
      clientSecret: 'bb445a3149750b0d2cc07677d043a53d',
      callbackURL: 'https://3000-sajithmadushank-oauth20-r84wtfxdn7i.ws-us114.gitpod.io/api/v1/auth/facebook/redirect',
      profileFields: ['id', 'name', 'emails', 'photos'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any, done: Function) {
    const { name, emails, photos } = profile;
    const user = {
      facebookId: profile.id,
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    const payload = {
      user,
      accessToken,
    };

    done(null, payload);
  }
}
