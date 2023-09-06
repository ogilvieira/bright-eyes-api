import { Seeder } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { User } from '@entity/User';

export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
    ): Promise<any> {       
        const repository = dataSource.getRepository(User);
        await repository.insert([
            {
                nome: 'Ariane',
                sobrenome: 'Araújo Cabral de Figueiredo',
                email: 'ariane.figueiredo@senac.com.br',
                senha: "123456"
            },
            {
                nome: 'David',
                sobrenome: 'Santana da Silva',
                email: 'david.silva@senac.com.br',
                senha: "123456",
                tipo_key: "vendedor",
            },
            {
                nome: 'Felipe',
                sobrenome: 'Valli',
                email: 'felipe.valli@senac.com.br',
                senha: "123456"
            },
            {
                nome: 'Gilmair',
                sobrenome: 'Vieira Barros',
                email: 'gilmair.barros@senac.com.br',
                senha: "123456",
                tipo_key: "gerente"
            },
            {
                nome: 'Ignacio',
                sobrenome: 'Javier Mourullo',
                email: 'ignacio.mourullo@senac.com.br',
                senha: "123456",
                tipo_key: "vendedor"
            },
            {
                nome: 'Josué',
                sobrenome: 'Domingues de Oliveira Neto',
                email: 'josué.neto@senac.com.br',
                senha: "123456"
            },
            {
                nome: 'Lucas',
                sobrenome: 'Souza Pereira', 
                email: 'lucas.pereira@senac.com.br',
                senha: "123456",
                tipo_key: "gerente"
            }
        ]);
    }
}