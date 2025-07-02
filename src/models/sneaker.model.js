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
        type: Sequelize.STRING 
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
        type: Sequelize.STRING 
      }, 
      laces: { 
        type: Sequelize.INTEGER 
      }, 
      soles: { 
        type: Sequelize.INTEGER 
      },
      paint: {
        type: Sequelize.INTEGER
      },
      glue: {
        type: Sequelize.INTEGER
      },
      status: { 
        type: Sequelize.STRING 
      },
      shoelace: {
        type: Sequelize.INTEGER
      },
      creator: { 
        type: Sequelize.STRING 
      },
      csv: {
        type: Sequelize.BOOLEAN,
        defaultvalue: false
      },
      price:{
        type: Sequelize.INTEGER
      },
      updatedBy: {
        type: Sequelize.STRING
      }
    }); 
   
    return Sneakers; 
  }; 