import { AfterInsert, Entity, Column, PrimaryGeneratedColumn, AfterUpdate, AfterRemove } from "typeorm";
import { Exclude } from "class-transformer";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    @Exclude()
    password: string;

    @AfterInsert()
    logInsert() {
        console.log("inserted user with id = ", this.id, this.email);
    }

    @AfterUpdate()
    logUpdate() {
        console.log('updated user with id = ', this.id, this.email);
    }

    @AfterRemove() 
    logRemove() {
        console.log('removed user with id = ', this.id, this.email);
    }
}