import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, OneToMany } from "typeorm";
import { Anime } from "./anime.entity";
import { Chapter } from "./chapter.entity";

@Entity()
export class Studio {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  website: string;

  @OneToMany(() => Anime, anime => anime.studioId)
  animes: Anime[];

  @OneToMany(() => Chapter, chapter => chapter.studioId)
  chapters: Chapter[];

  @Column({ nullable: true })
  @DeleteDateColumn()
  deletedAt: Date;
}
