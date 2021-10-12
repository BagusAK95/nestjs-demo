import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../user/dto/user.role.dto';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);