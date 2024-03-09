import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SMS {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  mobile_number: string;

  @Column()
  message: string;

  @Column()
  lang: string;

  @CreateDateColumn()
  created_at: Date;
}
