import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ObjectType, Field, ID, Float, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Book {

  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  // 📖 Basic Info
  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  author!: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  // 📊 Details
  @Field(() => Float, { nullable: true })
  @Column('decimal', { nullable: true })
  price?: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  pages?: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  publisher?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  language?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  isbn?: string;

  // 🏷️ Categorization
  @Field({ nullable: true })
  @Column({ nullable: true })
  genre?: string;

  @Field(() => [String], { nullable: true })
  @Column('simple-array', { nullable: true })
  tags?: string[];

  // 📦 Inventory
  @Field(() => Int, { nullable: true })
  @Column({ default: 0 })
  stock?: number;

  @Field({ nullable: true })
  @Column({ default: true })
  isAvailable?: boolean;

  // ⭐ Ratings
  @Field(() => Float, { nullable: true })
  @Column('float', { nullable: true })
  rating?: number;

  // 🕒 Timestamps
  @Field()
  @CreateDateColumn()
  createdAt!: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt?: Date;
}