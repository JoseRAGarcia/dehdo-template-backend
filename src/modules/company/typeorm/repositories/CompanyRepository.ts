import { EntityRepository, Repository } from 'typeorm'
import Company from '../entities/Company'

@EntityRepository(Company)
export default class CompanyRepository extends Repository<Company> {
    public async findByName(name: string): Promise<Company | undefined> {
        const company = this.findOne({
            where: {
                name,
            }
        })
        return company
    }

    public async findByCnpj(cnpj: string): Promise<Company | undefined> {
        const company = this.findOne({
            where: {
                cnpj,
            }
        })
        return company
    }
}