import express from 'express'
import { home, login, register, registeration } from "../controller/admin.js";


const appRouter = express.Router()

appRouter.get('/', home)
appRouter.post('/dashboard', registeration)
appRouter.get('/register', register)
appRouter.get('/login', login)

export default appRouter

