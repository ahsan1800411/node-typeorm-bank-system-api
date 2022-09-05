import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Client } from './Client';

export enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

@Entity('transaction')
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    enum: TransactionType,
    type: 'enum',
  })
  type: string;

  @Column()
  amount: number;

  // many to one />> one transaction has one client and one client have many transactions
  @ManyToOne(() => Client, (client) => client.transactions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'client_id',
  })
  client: Client;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
