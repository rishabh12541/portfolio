const express = require('express')

const { Feedbs , db} = require('./db/model')

const app = express()

const PORT = process.env.PORT || 3456

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/' , express.static( __dirname + '/public'))

app.post('/' , async(req , res) => {
  let fee =  await Feedbs.create( {
        feedbacks : req.body.feedbacks
    })
    res.status(201).send('done')
})



db.sync()
.then(() => {
    app.listen(PORT , () => {
        console.log("Port has started")
    })
})