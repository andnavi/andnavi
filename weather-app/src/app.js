const path = require('path')
const express = require('express')
const hbs = require('hbs')
const forecast = require('../src/utils/forcast')
const geocode = require('../src/utils/geocode')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

app.set('views',viewsPath);
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Abhishek'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Abhishek'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title:'Help',
        helpText: 'This is some helpful text.',
        name:'Abhishek'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error:'Please provide address'
        })
    }

    geocode(req.query.address,(error,data)=>{
        if(error){
            return res.send({
                error:error
            })
        }

        forecast(data,(error,forecastData)=>{
            if(error){
                return res.send({
                    error:error
                })
            }
            res.send({
                forecast: forecastData,
                location: data.place
            })

        })
    })

})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        desc:'help airtcle not found',
        name:'Abhishek'
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        title:'404',
        desc:'page not found',
        name:'Abhishek'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})