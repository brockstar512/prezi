const express =require('express')
const PORT = process.env.PORT || 3001
const parser = require('body-parser')
const cors = require('cors')
const app = express()
const presRoutes = require ('./routes/presRoutes')
const sectionRoutes = require ('./routes/sectionRoute')
const talkingPoint = require ('./routes/talkingPoint')

app.use(parser.json())
app.use(cors())

//add routers 
app.use('/pres', presRoutes)
app.use('/sections', sectionRoutes)
app.use('/talkpoint', talkingPoint)

app.get('/', (req, res)=>{
    res.send("index working")
})


app.listen(PORT, () => console.log('workit coder!', PORT))