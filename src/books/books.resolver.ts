import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) { }

  @Mutation(() => Book)
  async createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    const book = await this.booksService.create(createBookInput);

    console.log("🚀 ~ books.resolver.ts:15 ~ BooksResolver ~ createBook ~ book:", book)

    return book
  }

  @Mutation(() => Book)
  updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.booksService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book)
  removeBook(@Args('id') id: string) {
    return this.booksService.remove(id);
  }

  @Query(() => [Book])
  books() {
    return this.booksService.findAll();
  }

  @Query(() => Book, { nullable: true })
  book(@Args('id') id: string) {
    return this.booksService.findOne(id);
  }
}
