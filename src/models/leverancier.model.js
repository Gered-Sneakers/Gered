module.exports = (sequelize, Sequelize) => { 
    const Leveranciers = sequelize.define("Leverancier", { 
      id: { 
        type: Sequelize.UUID,        
        primaryKey: true,
      }, 
      isActive: {
        type: Sequelize.BOOLEAN
      },
      name: { 
        type: Sequelize.STRING 
      }
    }); 
   
    return Leveranciers; 
  }; 