
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { OrgAdmin } from './OrgAdmin'; 

@Entity()
export class Superadmin {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(() => OrgAdmin, (orgAdmin) => orgAdmin.superadmin) 
  orgAdmins!: OrgAdmin[]; 
}
