const mongoose = require('mongoose');
const express = require('express');
const app = express();
// https://data.mongodb-api.com/app/data-aqwqe/endpoint/data/v1
// mongodb+srv://<username>:<password>@cluster0.n4lkvln.mongodb.net/?retryWrites=true&w=majority

// mongodb+srv://sayna:sayna@sayna.xbohm.mongodb.net/?retryWrites=true&w=majority
//mongoose.connect('mongodb+srv://jaolava:jaolava@cluster0.n4lkvln.mongodb.net/?retryWrites=true&w=majority') 
const conn_str = 'mongodb+srv://sayna:sayna@sayna.xbohm.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(
conn_str,
{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
},(err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("mongodb is connected");
    }});
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/stuff', (req, res, nex) =>{
    console.log(req.body);
    res.status(201).json({
        message: 'objet crée!'
    });
});

app.get('/api/stuff', (req, res, next) =>{
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900,
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
   res.status(200).json(stuff);
});

module.exports = app;
