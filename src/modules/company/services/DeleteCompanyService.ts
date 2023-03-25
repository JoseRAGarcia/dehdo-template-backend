import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import CompanyRepository from './../typeorm/repositories/CompanyRepository';

interface IRequest {
    id: string
}

export default class DeleteCompanyService {
    public async execute({ id }: IRequest): Promise<void> {
        const companyRepository = getCustomRepository(CompanyRepository)

        const company = await companyRepository.findOne(id)

        if (!company) {
            throw new AppError('Empresa não localizada')
        }

        await companyRepository.remove(company)
    }
}