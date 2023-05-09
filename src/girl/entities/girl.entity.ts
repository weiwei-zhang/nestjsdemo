import {Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,Generated} from 'typeorm'

@Entity()
export class Girl {

    @PrimaryGeneratedColumn("uuid")
    id:number

    @Column({type:'varchar',length:20})
    name:string

    @Column({type:'int'})
    age:number

    @Column({type:'varchar'})
    skill:string

    @CreateDateColumn({type:'timestamp'})
    create_time:Date

    @Generated('uuid')
    uuid:string
}
