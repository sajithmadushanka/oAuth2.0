import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/utils/jwt.strategy';
import { FacebookStrategy } from 'src/utils/facebook.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'facebook' }),
    JwtModule.register({
      secret: 'my_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [AuthService,FacebookStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
