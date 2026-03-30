import { InputType, PartialType } from '@nestjs/graphql';
import { CreateGraphqlUserInput } from './create-user.input';

@InputType()
export class UpdateGraphqlUserInput extends PartialType(CreateGraphqlUserInput) {}
