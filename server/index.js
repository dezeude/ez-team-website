const path = require('path')
const express = require('express')
const app = express()
const port = Number(process.env.PORT)
const env = process.env.NODE_ENV

if(env === 'prod') app.use(express.static(path.join(__dirname, '..', 'build')))

app.listen(port, () => {
    console.log(`app started at ${port} in ${process.env.NODE_ENV} environment`)
})