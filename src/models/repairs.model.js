module.exports = (sequelize, Sequelize) => { 
    const Repairs = sequelize.define("Repairs", { 
      id: { 
        type: Sequelize.UUID,        
        primaryKey: true,
      }, 
      name: { 
        type: Sequelize.STRING 
      },
      price: {
        type: Sequelize.FLOAT
      }
    }); 
   
    return Repairs; 
  }; 