const Sequelize = require('sequelize')

if(DATABASE_URL) {
    const db = new Sequelize(DATABASE_URL)
}else {
    const db = new Sequelize ('feedback' , 'feed' , 'passfe' , {
        dialect : 'mysql2' ,
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