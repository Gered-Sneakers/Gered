module.exports = (sequelize, Sequelize) => { 
    const Sneakers = sequelize.define("Sneaker", { 
      /*dbid: {
        type: Sequelize.UUID,
        primaryKey: true,
      },*/
      id: { 
        type: Sequelize.UUID,
        primaryKey: true,
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
      size: { 
        type: Sequelize.TINYINT
      }, 
      colors: { 
        type: Sequelize.STRING 
      }, 
      supplier: { 
        type: Sequelize.STRING 
      }, 
      laces: { 
        type: Sequelize.STRING 
      }, 
      soles: { 
        type: Sequelize.STRING 
      }, 
      status: { 
        type: Sequelize.STRING 
      }, 
      teRepareren: { 
        type: Sequelize.STRING 
      },
      creator: { 
        type: Sequelize.STRING 
      }
    }); 
   
    return Sneakers; 
  }; 