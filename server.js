const express = require('express')
const path = require('path')

const app = express() //Inisialisasi Express

//Konfigurasi View
app.set('views', path.join(__dirname,'views'))
app.set('view engine','hbs')

//Konfigurasi Static file
app.use(express.static('public'))

const middlewareSatu = (req,res,next) => {
    console.log('Middleware Satu')
    next()
}

const middlewareDua = (req,res,next) => {
    console.log('Middleware Dua')
    next()
}

// app.use(middlewareSatu)
// app.use(middlewareDua)

app.get('/', (request,response) => {
    response.render('index', {data : 'Hello Malang'} )
})

app.get('/coba/:name',(req,res) => {
    res.render('index', {data: req.params.name})
})

app.listen(3000, () => {
    console.log('Magic Happen at 127.0.0.1')
})