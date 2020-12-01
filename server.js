const express = require('express')

const { Feedbs , db} = require('./db/model')

const app = express()

const PORT = process.env.PORT || 3456

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('/' , express.static( __dirname + '/public'))
try {
    app.post('/' , async(req , res) => {
        let fee =  await Feedbs.create( {
              feedbacks : req.body.feedbacks
          })
          res.status(201).send('done')
      })
}
catch(err) {
    console.error(err)
}




db.sync({force : true})
.then(() => {
    app.listen(PORT)
})
.catch((err) => {
    console.error(err)
})