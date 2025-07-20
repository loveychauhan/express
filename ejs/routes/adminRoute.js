import express from 'express'
import { about, adminPage, home, login } from '../controller/admin.js'

//route/adminRoute.js

const appRouter = express.Router()

appRouter.get('/', home)
appRouter.get('/about', about)
appRouter.get('/login', login)
appRouter.get('/adminPage', adminPage)

export default appRouter