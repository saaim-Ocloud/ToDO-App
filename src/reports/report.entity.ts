import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Report {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    // @Column()
    // name: string;
    
    // @Column()
    // name: string;

    // @Column()
    // type: string;
}