
//this is a controller/admin.js
import fs from 'fs'
import fsp from 'fs/promises'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'


export const home = (req, res) => {

    const products = [{
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit T-Shirts ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 4.6,
            "count": 400
        }
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 70
        }
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 9.99,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "rating": {
            "rate": 3,
            "count": 400
        }
    }]

    res.render('index', { products });
}

export const about = (req, res) => {
    res.send('about')
}
export const login = (req, res) => {
    res.render('login')
}
export const adminPage = (req, res) => {
    console.log('Body:', req.body);
    res.render('adminPage', { outputData: req.body });
};

export const filesystem = async (req, res) => {
    const files = await fsp.readdir('./')
    console.log(files)
    console.log('running')
    console.log('end')
    res.send('filesystem')
}

const newData = []
export const userForm1 = (req, res) => {
    const obj = req.body
    newData.push(obj)
    res.render('userForm', { newData })
}

export const userForm = (req, res) => {
    res.render('userForm', { newData })
}


export const blog = (req, res) => {
    fs.readdir("./files", function (err, files) {
        res.render('blog.ejs', { files })
    })
}

export const preView = async (req, res) => {
    const { title, description } = req.body
    let fileName = title.split(' ').join('')
    if (fileName) {
        const content = `
        Title: ${title}
        Description: ${description}`

        fs.writeFile(`./files/${fileName}.txt`, content, (err) => {
            console.log(err)
        })

        const files = await fsp.readdir('./files')
        res.render('blog.ejs', { files })
    }
}

export const DynamicRoute = (req, res) => {
    const fileName = req.params.app
    res.render('dynanic', { fileName })
}

export const Rename = (req, res) => {
    // const { oldName, newName } = req.body;
    // res.send(newName);

    // const __fileName = fileURLToPath(import.meta.url)
    // const __dirname = dirname(__fileName)

    // const folderPath = path.resolve(__dirname, '..', 'files')
    // const oldPath = path.join(folderPath, oldName)
    // const newPath = path.join(folderPath, newName)

    // fs.readdir('./files', (err, data) => {
    //     if (err) console.log(err)
    //     data.map((file) => {
    //         if (file === oldName) {
    //             fs.rename(oldPath, newPath, (err) => {
    //                 if (err) console.log('cannot rename file name')
    //             })
    //         }
    //     })
    // })

    fs.readFile(`./files/`, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
    // console.log(req.body)
};


