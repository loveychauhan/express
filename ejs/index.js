import express from 'express';
import appRouter from './routes/adminRoute.js';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import fs from 'fs'

const app = express();


fs.mkdirSync('cats')
console.log('directory made')

const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // must be before router
const mypath = "/e/web development bootcamp/backend/express/ejs"

app.use(appRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
