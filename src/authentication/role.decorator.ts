import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../models/user/dto/user.role.dto';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);