import { ObjectType, Field, Float, ID } from '@nestjs/graphql';
import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsOptional } from 'class-validator';
import { User } from '../../users/entities/user.entity';


@Entity({ name: 'items' })
@ObjectType()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  @Field( () => ID )
  id: string;

  @Column()
  @Field( () => String )
  name: string;

  // @Column()
  // @Field( () => Float )
  // quantity: number;

  @Column({ nullable: true })
  @Field( () => String, { nullable: true } )
  quantityUnits?: string; // g, ml, kg, ton

  // store
  // user
  @ManyToOne( () => User, (user) => user.items, { nullable: false, lazy: true } )
  @Index('userId-index')
  @Field( () => User )
  user: User;
}
