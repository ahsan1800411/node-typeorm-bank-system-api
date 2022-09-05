import { Entity, Column, OneToMany, ManyToMany } from 'typeorm';
import { Banker } from './Banker';
import { Person } from './Person';
import { Transaction } from './Transaction';

@Entity('client')
export class Client extends Person {
  @Column({
    name: 'active',
    default: true,
  })
  is_active: boolean;

  @Column({
    type: 'numeric',
  })
  balance: number;

  @Column({
    type: 'simple-json',
    nullable: true,
  })
  additional_info: {
    age: number;
    salary: number;
  };

  // one to many / Client has many transactions

  @OneToMany(() => Transaction, (transaction) => transaction.client, {
    cascade: true,
  })
  transactions: Transaction[];

  // many to many Bankers to Clients
  @ManyToMany(() => Banker)
  bankers: Banker[];

  @Column({
    type: 'simple-array',
    default: [],
  })
  family_members: string[];
}
