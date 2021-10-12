import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, Put, UseGuards, UseInterceptors } from '@nestjs/common';
import { JwtGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/role/role.guard';
import { Roles } from '../role/role.decorator';
import { UserRole } from './dto/user.role.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(JwtGuard, RoleGuard)
@UseInterceptors(ClassSerializerInterceptor)
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @Roles(UserRole.ADMIN)
  async save(@Body() user: User) {
    return await this.userService.save(user)
  }

  @Get()
  async find() {
    return await this.userService.find()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.userService.findOne(id)
  }

  @Put(':id')
  @Roles(UserRole.ADMIN)
  async update(@Param('id') id: string, @Body() user: User) {
    return await this.userService.update(id, user)
  }

  @Delete(':id')
  @Roles(UserRole.ADMIN)
  async delete(@Param('id') id: string) {
    return await this.userService.delete(id)
  }
}
