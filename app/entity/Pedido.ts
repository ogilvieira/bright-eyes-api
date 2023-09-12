import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Produto } from '@entity/Produto';
import { User } from '@entity/User';
import { Cartao } from '@entity/Cartao';
import { Endereco } from "@entity/Endereco";
@Entity()
export class Pedido {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => Produto)
    @JoinColumn({ name: "produto_id", referencedColumnName: "id" })
    produto: Produto;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id", referencedColumnName: "id" })
    user: User;

    @ManyToOne(() => Cartao)
    @JoinColumn({ name: "cartao_id", referencedColumnName: "id" })
    cartao: Cartao;

    @ManyToOne(() => Endereco)
    @JoinColumn({ name: "endereco_id", referencedColumnName: "id" })
    endereco: Endereco;

    @Column({ nullable: false })
    parcelas: number

    @Column({ nullable: false })
    total: number

    @Column()
    receita: string

    @Column()
    rastreio: string

    @Column()
    status: string

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
