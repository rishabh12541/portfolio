const Sequelize = require('sequelize')



    const db = new Sequelize ('feedback' , 'feed' , 'passfe' , {
        dialect : 'mysql' 
    })




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