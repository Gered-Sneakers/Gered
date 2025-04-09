module.exports = (sequelize, Sequelize) => { 
    const Leveranciers = sequelize.define("Leverancier", { 
      id: { 
        type: Sequelize.UUID,        
        primaryKey: true,
      }, 
      name: { 
        type: Sequelize.STRING 
      }
    }); 
   
    return Leveranciers; 
  }; 