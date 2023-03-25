import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Company from '../typeorm/entities/Company';
import CompanyRepository from './../typeorm/repositories/CompanyRepository';

interface IRequest {
    name: string
    cnpj: string
    phone_number_1: string
    phone_number_2: string
}

export default class CreateCompanyService {
    public async execute({ name, cnpj, phone_number_1, phone_number_2 }: IRequest): Promise<Company> {
        const companyRepository = getCustomRepository(CompanyRepository)

        const companyExists = await companyRepository.findByCnpj(cnpj)

        if(companyExists) {
            throw new AppError('Já existe uma empresa com este CNPJ!')
        }

        const companyNameExists = await companyRepository.findByName(name)

        if(companyNameExists) {
            throw new AppError('Já existe uma empresa com este Nome!')
        }

        const company = companyRepository.create({
            name,
            cnpj,
            phone_number_1,
            phone_number_2,
        })

        await companyRepository.save(company)

        return company
    }
}