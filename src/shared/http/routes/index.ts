import { Router } from 'express'
import companyRouter from '@modules/company/routes/company.routes'
//import layoutRouter from '@modules/layout/routes/layout.routes'

const routes = Router()

routes.use('/company', companyRouter)
//routes.use('/layout', layoutRouter)

export default routes