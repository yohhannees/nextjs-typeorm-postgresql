
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Superadmin } from './Superadmin';
import { Employee } from './Employee'; 

@Entity()
export class OrgAdmin {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Superadmin, (superadmin) => superadmin.orgAdmins)
  superadmin!: Superadmin;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  invitationCode!: string;

  @OneToMany(() => Employee, (employee) => employee.orgAdmin) 
  employees!: Employee[]; 
}
