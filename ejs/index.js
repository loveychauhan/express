import express from 'express';
import appRouter from './routes/adminRoute.js';
import { fileURLToPath } from 'url';
import path from 'path';
import { dirname } from 'path';
import mongoose from 'mongoose';

const app = express();

const __fileName = fileURLToPath(import.meta.url)
const __dirname = dirname(__fileName)

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// const mypath = "/e/web development bootcamp/backend/express/ejs"

app.use(appRouter);



// mongoose

mongoose.connect('mongodb://127.0.0.1:27017/coding')
    .then(() => console.log('Connected!'));



const noteSchema = new mongoose.Schema({
    title: String,
    des: String
})

const userSchema = new mongoose.Schema({
    name: String,
    course: String,
})


const user = mongoose.model('user', userSchema)
const note = mongoose.model('note', noteSchema)


app.get('/codeWareIt', async (req, res) => {
    const data = await user.find()
    res.render('codeWareIt', { data })
})


app.post('/codeWareIt', async (req, res) => {
    const { name, course } = req.body
    const userData = new user({
        name, course
    })
    userData.save()
    const data = await user.find()
    res.render('codeWareIt', { data })
})


app.get("/datasend", (req, res) => {
    res.render("sendata")
})

app.post("/datasend", (req, res) => {
    const { title, des } = req.body
    // console.log(`title : ${title} des : ${des}`)
    const data = new note({
        title, des
    })

    // console.log(data)
    data.save()
    // console.log(data)
    res.redirect("/datasend")
})


app.get("/info", async (req, res) => {
    const info = await note.find();

    // console.log("info : ", info)
    res.render("info", { info })
})


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
