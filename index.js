const express = require('express')
const path = require('path')
const app = express()
const os = require( 'os' )
const bodyParser = require('body-parser')
const cors = require('cors')

const networkInterfaces = os.networkInterfaces( );
const networkAdapter = 'wlp5s0'
const localIp =  networkInterfaces[networkAdapter][0].address
const port = process.env.PORT || 80





const signos = {
    acuario: `http://${localIp}:${port}/img/acuario.png`,
    aries: `http://${localIp}:${port}/img/aries.png`,
    cancer: `http://${localIp}:${port}/img/cancer.png`,
    capricornio: `http://${localIp}:${port}/img/capricornio.png`,
    escorpio: `http://${localIp}:${port}/img/escorpio.png`,
    geminis: `http://${localIp}:${port}/img/geminis.png`,
    leo: `http://${localIp}:${port}/img/leo.png`,
    libra: `http://${localIp}:${port}/img/libra.png`,
    piscis: `http://${localIp}:${port}/img/piscis.png`,
    sagitario: `http://${localIp}:${port}/img/sagitario.png`,
    tauro: `http://${localIp}:${port}/img/tauro.png`,
    virgo: `http://${localIp}:${port}/img/virgo.png`


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