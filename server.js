const express = require('express')

const app = express()

const PORT = process.env.PORT || 3456

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use('/' , express.static( __dirname + '/public'))

app.listen(3456 , () => {
    console.log("Port has started")
})