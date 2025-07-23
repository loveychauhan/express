import express from 'express';
import appRouter from './routes/adminRoute.js';
import path from 'path';


const app = express();

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // must be before router

const mypath = "\\e\\web development bootcamp\\backend/express \\ ejs/node.txt"
console.log('path:-', path.dirname(mypath).split(' ').join(""))
app.use(appRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
