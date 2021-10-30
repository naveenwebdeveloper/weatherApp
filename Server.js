//use pakeges
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('cross-fetch');





//run in localhost in port no. 4000
const app = express();
const port = 4000;

//use for connection with clint
app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));
//allow to json 
app.use(express.json());

// api.openweathermap.org/data/2.5/weather?q=Pune&appid=26499c109fe300dd840ac74865b79486

//req from client with city data and send responce fetching api data
app.post('/', async(req, res) => {
    const city = req.body.cityIs;
    const apiRes = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=26499c109fe300dd840ac74865b79486`)
    const weatherData = await apiRes.json();
    res.json(weatherData);
});

//create server with express js
app.listen(port, 'localhost', () => {
    console.log('connection successfull in backend');
})