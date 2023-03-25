import { Request, Response } from 'express';
import CreateCompanyService from '../services/CreateCompanyService';
import DeleteCompanyService from '../services/DeleteCompanyService';
import ListCompanyService from '../services/ListCompanyService';
import ShowCompanyService from '../services/ShowCompanyService';
import UpdateCompanyService from '../services/UpdateCompanyService';


export default class CompanyController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listCompanies = new ListCompanyService()

        const companies = await listCompanies.execute()

        return response.json(companies)
    }

    public async show(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const showCompany = new ShowCompanyService()

        const company = await showCompany.execute({ id })

        return response.json(company)
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, cnpj, phone_number_1, phone_number_2 } = request.body

        const createCompany = new CreateCompanyService()

        const company = await createCompany.execute({
            name,
            cnpj,
            phone_number_1,
            phone_number_2
        })

        return response.json(company)
    }

    public async update(request: Request, response: Response): Promise<Response> {
        const { name, cnpj, phone_number_1, phone_number_2 } = request.body
        const { id } = request.params

        const updateCompany = new UpdateCompanyService()

        const company = await updateCompany.execute({
            id,
            name,
            cnpj,
            phone_number_1,
            phone_number_2
        })

        return response.json(company)
    }

    public async delete(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const deleteCompany = new DeleteCompanyService()

        await deleteCompany.execute({id})

        return response.json([])
    }
}

