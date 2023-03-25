import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Company from '../typeorm/entities/Company';
import CompanyRepository from './../typeorm/repositories/CompanyRepository';

interface IRequest {
    id: string
    name: string
    cnpj: string
    phone_number_1: string
    phone_number_2: string
}

export default class UpdateCompanyService {
    public async execute({ id, name, cnpj, phone_number_1, phone_number_2 }: IRequest): Promise<Company> {
        const companyRepository = getCustomRepository(CompanyRepository)

        const company = await companyRepository.findOne(id)

        if (!company) {
            throw new AppError('Empresa não localizada')
        }

        if(company.cnpj != cnpj) {
            throw new AppError('Não é possível atualizar o CNPJ da empresa!')
        }

        const companyNameExists = await companyRepository.findByName(name)

        if(companyNameExists && company.name != name) {
            throw new AppError('Já existe uma empresa com este nome!')
        }      

        company.name = name
        company.phone_number_1 = phone_number_1
        company.phone_number_2 = phone_number_2

        await companyRepository.save(company)

        return company
    }
}