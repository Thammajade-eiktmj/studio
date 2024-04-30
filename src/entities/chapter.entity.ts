import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne } from "typeorm";
import { Studio } from "./studio.entity";
import { Anime } from "./anime.entity";

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  studioId: string | null;

  @Column({ nullable: true })
  animeId: string | null;

  @Column()
  duration: number;

  @ManyToOne(() => Studio, studio => studio.chapters)
  studio: Studio;

  @ManyToOne(() => Anime, anime => anime.chapters)
  anime: Anime;

  @Column({ nullable: true })
  @DeleteDateColumn()
  deletedAt: Date;
}
