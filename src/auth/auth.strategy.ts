import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { CACHE_MANAGER, Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import jwtConfig from '../configuration/jwt.config';
import { UserService } from '../user/user.service';
import { Cache } from 'cache-manager'

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(jwtConfig.KEY)
    private config: ConfigType<typeof jwtConfig>,
    @Inject(CACHE_MANAGER)
    private cacheManager: Cache,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.secret,
    });
  }

  async validate(payload: any) {
    const { id } = payload

    const cache = await this.cacheManager.get(`userProfile:${id}`)
    if (cache) {
      return cache
    }

    const user = await this.userService.findOne(id)
    if (!user) {
      throw new UnauthorizedException()
    }

    delete user.password
    await this.cacheManager.set(`userProfile:${id}`, user)

    return user
  }
}