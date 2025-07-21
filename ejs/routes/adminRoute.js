import express from 'express'
import { about, adminPage, filesystem, home, login } from '../controller/admin.js'

//route/adminRoute.js

const appRouter = express.Router()

appRouter.get('/', home)
appRouter.get('/about', about)
appRouter.get('/login', login)
appRouter.get('/adminPage', adminPage)
appRouter.post('/adminPage', adminPage)
appRouter.get('/filesystem', filesystem)

export default appRouter