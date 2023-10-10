
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { OrgAdmin } from './OrgAdmin';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => OrgAdmin, (orgAdmin) => orgAdmin.employees)
  orgAdmin!: OrgAdmin;

  @Column()
  name!: string;

  @Column()
  email!: string;
}
