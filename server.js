const express = require('express')

const app = express()

const PORT = process.env.PORT || 3456


app.use('/' , express.static( __dirname + '/public'))

app.listen(PORT , () => {
    console.log("Port has started")
})