import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne, OneToMany } from "typeorm";
import { Studio } from "./studio.entity";
import { Chapter } from "./chapter.entity";

@Entity()
export class Anime {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  year: string;

  @Column()
  studioId: string | null;

  @ManyToOne(() => Studio, studio => studio.animes)
  studio: Studio;

  @OneToMany(() => Chapter, chapter => chapter.animeId)
  chapters: Chapter[];

  @Column({ nullable: true })
  @DeleteDateColumn()
  deletedAt: Date;
}
