import { Router } from 'express'
import CompanyController from '../controllers/CompanyController'
import { celebrate, Joi, Segments } from 'celebrate'

const companyRouter = Router()
const companyController = new CompanyController()

companyRouter.get('/', companyController.index)

companyRouter.get(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    companyController.show
)

companyRouter.post(
    '/',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            cnpj: Joi.string().required(),
            phone_number_1: Joi.string().required(),
            phone_number_2: Joi.string(),
        },
    }),
    companyController.create
)

companyRouter.put(
    '/:id',
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            cnpj: Joi.string().required(),
            phone_number_1: Joi.string().required(),
            phone_number_2: Joi.string(),
        },
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    companyController.update
)

companyRouter.delete(
    '/:id',
    celebrate({
        [Segments.PARAMS]: {
            id: Joi.string().uuid().required(),
        },
    }),
    companyController.delete
)

export default companyRouter