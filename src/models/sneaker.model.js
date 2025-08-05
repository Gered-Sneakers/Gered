module.exports = (sequelize, Sequelize) => { 
    const Sneakers = sequelize.define("Sneaker", { 
      /*dbid: {
        type: Sequelize.UUID,
        primaryKey: true,
      },*/
      id: { 
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      colorlabel: { 
        type: Sequelize.STRING 
      }, 
      date: { 
        type: Sequelize.STRING 
      }, 
      brand: { 
        type: Sequelize.INTEGER // ID
      }, 
      model: { 
        type: Sequelize.STRING 
      }, 
      extra: {
        type: Sequelize.STRING
      },
      size: { 
        type: Sequelize.FLOAT
      }, 
      colors: { 
        type: Sequelize.STRING 
      }, 
      supplier: { 
        type: Sequelize.INTEGER // ID
      }, 
      laces: { 
        type: Sequelize.BOOLEAN 
      }, 
      soles: { 
        type: Sequelize.BOOLEAN 
      },
      paint: {
        type: Sequelize.BOOLEAN
      },
      glue: {
        type: Sequelize.BOOLEAN
      },
      status: { 
        type: Sequelize.INTEGER // ID
      },
      shoelace: {
        type: Sequelize.STRING
      },
      creator: { 
        type: Sequelize.INTEGER // ID
      },
      price:{
        type: Sequelize.FLOAT
      },
      updatedBy: {
        type: Sequelize.STRING // ID
      },
      bakNr: {
        type: Sequelize.STRING,
        allowNull: true
      },
      soldDate: {
        type: Sequelize.STRING
      }
    }); 
   
    return Sneakers; 
  }; 