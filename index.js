const express = require('express')
const path = require('path')
const app = express()
const os = require( 'os' )
const bodyParser = require('body-parser')
const cors = require('cors')

const networkInterfaces = os.networkInterfaces( );
const herokuDomain = 'secret-eyrie-21914.herokuapp.com'
const port = process.env.PORT || 80





const signos = {
    acuario: `http://${herokuDomain}/img/acuario.png`,
    aries: `http://${herokuDomain}/img/aries.png`,
    cancer: `http://${herokuDomain}/img/cancer.png`,
    capricornio: `http://${herokuDomain}/img/capricornio.png`,
    escorpio: `http://${herokuDomain}/img/escorpio.png`,
    geminis: `http://${herokuDomain}/img/geminis.png`,
    leo: `http://${herokuDomain}/img/leo.png`,
    libra: `http://${herokuDomain}/img/libra.png`,
    piscis: `http://${herokuDomain}/img/piscis.png`,
    sagitario: `http://${herokuDomain}/img/sagitario.png`,
    tauro: `http://${herokuDomain}/img/tauro.png`,
    virgo: `http://${herokuDomain}/img/virgo.png`


}

app.use(cors())
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: true}))



app.use('/img',express.static('public/static'));

app.get('/signos',(req,res,next) =>{
    res.json(signos)
})

app.listen(port,() =>{
    console.log(`Server running on  http://localhost:${port}/signos`)
})