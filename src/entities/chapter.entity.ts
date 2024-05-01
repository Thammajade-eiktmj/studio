import { Entity, Column, PrimaryGeneratedColumn, DeleteDateColumn, ManyToOne, JoinColumn } from "typeorm";
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

  @JoinColumn({ name: "studioId" })
  @ManyToOne(() => Studio, studio => studio.chapters, { onDelete: "SET NULL" })
  studio: Studio;

  @JoinColumn({ name: "animeId" })
  @ManyToOne(() => Anime, anime => anime.chapters, { onDelete: "SET NULL" })
  anime: Anime;

  @Column({ nullable: true })
  @DeleteDateColumn()
  deletedAt: Date;
}
