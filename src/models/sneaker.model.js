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
        type: Sequelize.STRING // ID
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
        type: Sequelize.STRING // ID
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
        type: Sequelize.STRING // ID
      },
      shoelace: {
        type: Sequelize.INTEGER
      },
      creator: { 
        type: Sequelize.STRING // ID
      },
      csv: {
        type: Sequelize.BOOLEAN,
        defaultvalue: false
      },
      verkoop: {
        type: Sequelize.BOOLEAN
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
      sold: {
        type: Sequelize.BOOLEAN
      },
      soldDate: {
        type: Sequelize.STRING
      }
    }); 
   
    return Sneakers; 
  }; 