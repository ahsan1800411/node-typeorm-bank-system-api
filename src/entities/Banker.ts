import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { Client } from './Client';
import { Person } from './Person';

@Entity('banker')
export class Banker extends Person {
  @Column({
    unique: true,
    length: 10,
  })
  employee_number: string;

  // many to many Bankers to Clients
  @ManyToMany(() => Client, {
    cascade: true,
  })
  @JoinTable({
    name: 'banker_clients',
    joinColumn: {
      name: 'banker',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'client',
      referencedColumnName: 'id',
    },
  })
  clients: Client[];
}
