import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Studio } from "./studio.entity";
import { Chapter } from "./chapter.entity";

@Entity()
export class Anime {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  year: number;

  @JoinColumn({ name: "studioId" })
  @ManyToOne(() => Studio, studio => studio.animes, { onDelete: "SET NULL" })
  studio: Studio;

  @OneToMany(() => Chapter, chapter => chapter.animeId)
  chapters: Chapter[];

  @Column({ nullable: true })
  @DeleteDateColumn()
  deletedAt: Date;
}
