import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsBoolean, IsOptional, IsString } from 'class-validator';

@Entity()
export class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    @IsNotEmpty()
    @IsString()
    title: string

    @Column({ nullable: true })
    @IsOptional()
    @IsString()
    desc: string

    @Column({ default: false })
    @IsBoolean()
    isDone: boolean
}