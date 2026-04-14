import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) public readonly book: Repository<Book>,
  ) { }

  async create(createBookInput: CreateBookInput) {
    let book = await this.book.create(createBookInput); // ❌ .create() sets fields
    book = await this.book.save(book);

    console.log("🚀 ~ books.service.ts:18 ~ BooksService ~ create ~ book:", book)
    return book

  }

  findAll() {
    return this.book.find()
  }

  findOne(id: string) {
    return this.book.findOne({ where: { id } })
  }

  update(id: string, updateBookInput: UpdateBookInput) {
    this.book.update({ id: id }, updateBookInput);
    const book = this.book.findOne({
      where: { id: id }
    });

    if (!book) {
      throw new Error("book not found");
    }

    return book;
  }

  remove(id: string) {
    const book = this.book.findOne({
      where: { id }
    });

    if (!book) {
      throw new BadRequestException("User not found");
    }

    this.book.delete({ id: id });

    return book;;
  }
}
