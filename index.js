
const express = require('express')
const app = express()
const port = 3001
app.use(express.static('public'))
require('dotenv').config();
const mongoose = require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/test');
mongoose.connect(process.env.MONGODB_URI );
console.log(process.env.MONGODB_URI );


//открыть дб
const Cat = mongoose.model('Cat', { name: String });

//открыть дб
const Weather= mongoose.model('Weather', { 
  temperature: String,
  city:  String,
  date: String
});


/* const Weather= mongoose.model('Weather', { 
  temperature: String,
  city:  String,
  date: String
});

//присвоить значения
const newWeather = new Weather({ 
  temperature: temperature,
  city: city,
  date: date
});

await newWeather.save().then(() => console.log('Weather add!'));
res.json(newWeather);

app.get('/api/weather', (req,res) => {
    res.json({
        'temperature': 30
    })
})
*/
/* app.get('/api/currency', (req,res) => {
    res.json({
        'dollar': 28
    })
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})
 */


//add кошку
app.get('/api/cat', async (req,res) => {
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => console.log('meow'));
 
 })

//get cats
app.get('/api/log', async (req,res) => {
  let log = await Cat.find()
  res.json(log);
 })

//get weather
app.get('/api/weather', async (req,res) => {

  let log = await Weather.find()
  res.json(log);
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
