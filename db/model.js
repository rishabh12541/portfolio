const Sequelize = require('sequelize')

let db ;
    if(process.env.DATABASE_URL){
        db = new Sequelize(process.env.DATABASE_URL)
    }else{
        db = new Sequelize ('feedback' , 'feed' , 'passfe' , {
            dialect : 'mysql' 
        })
    
    }
    



const Feedbs = db.define('feedb' , {
    id : {
        type : Sequelize.DataTypes.INTEGER ,
        autoIncrement : true ,
        primaryKey : true 
    } , 
    feedbacks : {
        type : Sequelize.DataTypes.STRING(200) ,
        allowNull : true
    }
})

exports = module.exports = {
    Feedbs ,
    db
}