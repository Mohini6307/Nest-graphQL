import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {

  @Field()
  title!: string;

  @Field()
  author!: string;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field(() => Int, { nullable: true })
  pages?: number;

  @Field({ nullable: true })
  publisher?: string;

  @Field({ nullable: true })
  language?: string;

  @Field({ nullable: true })
  isbn?: string;

  @Field({ nullable: true })
  genre?: string;

  @Field(() => [String], { nullable: true })
  tags?: string[];

  @Field(() => Int, { nullable: true })
  stock?: number;
}
