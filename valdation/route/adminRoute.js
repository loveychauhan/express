import express from 'express'
import multer from 'multer';
import { getFile, home, isUser, login, loginData, pinLogin, pinterestRegister, pinterestUser, register, registeration, uploadFile } from "../controller/admin.js";

const appRouter = express.Router()
// const upload = multer({ dest: 'upload/' })
// const upload = multer({ storage: storage })


appRouter.get('/', home)
appRouter.post('/dashboard', registeration)
appRouter.get('/register', register)
appRouter.get('/login', login)
appRouter.post('/login', loginData)
appRouter.get('/pinterest', pinterestRegister)
appRouter.post('/pinterest', pinterestUser)
appRouter.get('/pinlogin', pinLogin)
appRouter.post('/pinlogin', isUser)
appRouter.get('/fileUpload', uploadFile)
appRouter.post('/profile', getFile)

export default appRouter

