import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from './models/user.model';
import { UsersGraphqlService } from './users-graphql.service';
import { CreateGraphqlUserInput } from './dto/create-user.input';
import { UpdateGraphqlUserInput } from './dto/update-user.input';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly usersGraphqlService: UsersGraphqlService) {}

  @Mutation(() => UserModel)
  createUser(
    @Args('input') input: CreateGraphqlUserInput,
  ): Promise<UserModel> {
    return this.usersGraphqlService.create(input);
  }

  @Query(() => [UserModel], { name: 'users' })
  findAll(): Promise<UserModel[]> {
    return this.usersGraphqlService.findAll();
  }

  @Query(() => UserModel, { name: 'user' })
  findOne(@Args('id') id: string): Promise<UserModel> {
    return this.usersGraphqlService.findOne(id);
  }

  @Mutation(() => UserModel)
  updateUser(
    @Args('id') id: string,
    @Args('input') input: UpdateGraphqlUserInput,
  ): Promise<UserModel> {
    return this.usersGraphqlService.update(id, input);
  }

  @Mutation(() => UserModel)
  removeUser(@Args('id') id: string): Promise<UserModel> {
    return this.usersGraphqlService.remove(id);
  }
}
