import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  login: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  @DeleteDateColumn()
  deletedAt: Date;
}
