import express from 'express';
import appRouter from './routes/adminRoute.js';

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // must be before router

app.use(appRouter);

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
