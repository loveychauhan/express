import express from 'express'
import { about, adminPage, blog, DynamicRoute, filesystem, home, login, preView, Rename, userForm, userForm1 } from '../controller/admin.js'

//route/adminRoute.js

const appRouter = express.Router()

appRouter.get('/', home)
appRouter.get('/about', about)
appRouter.get('/login', login)
appRouter.get('/adminPage', adminPage)
appRouter.post('/adminPage', adminPage)
appRouter.get('/filesystem', filesystem)
appRouter.get('/userForm', userForm)
appRouter.post('/userForm', userForm1)
appRouter.get('/blog', blog)
appRouter.post('/blog', preView)
appRouter.get("/files/:app", DynamicRoute)
appRouter.post("/files/:app", Rename)


export default appRouter