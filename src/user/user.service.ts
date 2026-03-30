import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService /* implements OnModuleInit  */ {
  /*   private authService: AuthService; */
  constructor(
    /*  private moduleRef: ModuleRef, */
    @InjectRepository(User) public readonly user: Repository<User>,
  ) { }

  /* async onModuleInit() {
    this.authService = await this.moduleRef.resolve(AuthService);
  } */

  createUser(body: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
