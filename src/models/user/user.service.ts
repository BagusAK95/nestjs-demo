import { HttpException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>
  ) {}

  async save(user: User) {
    try {
      return await this.usersRepo.save(user)
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  async find() {
    try {
      return await this.usersRepo.find();
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.usersRepo.findOne(id);
      if (!user) {
        throw new NotFoundException('Invalid User ID')
      }

      return user
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  async findByEmail(email: string) {
    try {
      const user = await this.usersRepo.findOne({ email });
      if (!user) {
        throw new NotFoundException('Invalid Email')
      }

      return user
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  async update(id: string, user: User) {
    try {
      const updated = await this.usersRepo.update(id, user)
      if (updated.affected === 0) {
        throw new NotFoundException('Invalid User ID')
      }

      return { message: 'Updated' }
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }

  async delete(id: string) {
    try {
      const deleted = await this.usersRepo.delete(id);
      if (deleted.affected === 0) {
        throw new NotFoundException('Invalid User ID')
      }

      return { message: 'Deleted' }
    } catch (error) {
      throw new HttpException(error.message, error.status)
    }
  }
}