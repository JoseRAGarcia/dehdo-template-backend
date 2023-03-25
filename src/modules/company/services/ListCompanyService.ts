import { getCustomRepository } from 'typeorm';
import Company from '../typeorm/entities/Company';
import CompanyRepository from './../typeorm/repositories/CompanyRepository';

export default class ListCompanyService {
    public async execute(): Promise<Company[]> {
        const companyRepository = getCustomRepository(CompanyRepository)

        const companies = companyRepository.find()

        return companies
    }
}