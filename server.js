const express = require('express')

const app = express()

const middlewareSatu = (req,res,next) => {
    console.log('Middleware Satu')
    next()
}

const middlewareDua = (req,res,next) => {
    console.log('Middleware Dua')
    next()
}

app.use(middlewareSatu)
app.use(middlewareDua)

app.get('/', (request,response) => {
    response.send('Hello Server')
})

app.get('/coba/:name',(req,res) => {
    res.send('Ini dari /coba "'+ req.params.name+'"')
})

app.listen(3000, () => {
    console.log('Magic Happen at 127.0.0.1')
})