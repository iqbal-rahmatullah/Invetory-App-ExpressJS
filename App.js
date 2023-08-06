const express = require('express')
const app =  express()
const port = 3000
const routes = require('./routes')
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(routes)

app.listen(port, () => {
    console.log(`Server running in http://localhost:${port}`)
})