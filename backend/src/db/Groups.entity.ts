//Source code generated by AppGPT (www.appgpt.tech)
//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Groups')
export class GroupsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer', { nullable: true })
  Post: number;

  @Column('bool', { nullable: true })
  Share: boolean;

  @Column('integer', { nullable: true })
  Comment: number;

  @Column('text', { nullable: true })
  Reply: string;

  @Column('text', { nullable: true })
  Reacts: string;
}
