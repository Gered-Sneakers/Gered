const dbConfig = require("../config/db.config.js"); 
const Sequelize = require("sequelize"); 

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, { 
  host: dbConfig.HOST, 
  dialect: dbConfig.dialect, 
  operatorsAliases: false, 
 
  pool: { 
    max: dbConfig.pool.max, 
    min: dbConfig.pool.min, 
    acquire: dbConfig.pool.acquire, 
    idle: dbConfig.pool.idle 
  } 
}); 
 
const db = {}; 
 
db.Sequelize = Sequelize; 
db.sequelize = sequelize; 
db.sneakers = require("./sneaker.model.js")(sequelize, Sequelize); 
db.leveranciers = require("./leverancier.model.js")(sequelize, Sequelize);
db.werknemers = require("./werknemer.model.js")(sequelize, Sequelize);
db.brands = require("./brand.model.js")(sequelize, Sequelize);
db.labelcolors = require("./labelcolor.model.js")(sequelize , Sequelize);
db.repairs = require("./repairs.model.js")(sequelize,Sequelize);

//db.sneakers = require("./sneaker.model.js")(sequelize, Sequelize.DataTypes); 
 
module.exports = db; 