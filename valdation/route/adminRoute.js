import express from 'express'
import { home, isUser, login, loginData, pinLogin, pinterestRegister, pinterestUser, register, registeration } from "../controller/admin.js";


const appRouter = express.Router()

appRouter.get('/', home)
appRouter.post('/dashboard', registeration)
appRouter.get('/register', register)
appRouter.get('/login', login)
appRouter.post('/login', loginData)
appRouter.get('/pinterest', pinterestRegister)
appRouter.post('/pinterest', pinterestUser)
appRouter.get('/pinlogin', pinLogin)
appRouter.post('/pinlogin', isUser)

export default appRouter

