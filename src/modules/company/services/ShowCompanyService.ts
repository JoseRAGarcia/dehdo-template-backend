import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Company from '../typeorm/entities/Company';
import CompanyRepository from './../typeorm/repositories/CompanyRepository';

interface IRequest {
    id: string
}

export default class ShowCompanyService {
    public async execute({id}: IRequest): Promise<Company> {
        const companyRepository = getCustomRepository(CompanyRepository)

        const company = await companyRepository.findOne(id)

        if(!company) {
            throw new AppError('Empresa não localizada')
        }

        return company
    }
}