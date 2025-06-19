module.exports = (sequelize, Sequelize) => { 
    const Brands = sequelize.define("Brand", { 
      id: { 
        type: Sequelize.UUID,        
        primaryKey: true,
      }, 
      name: { 
        type: Sequelize.STRING 
      }, 
      img: { 
        type: Sequelize.STRING 
      },
      isActive: {
        type: Sequelize.BOOLEAN
      }
    }); 
   
    return Brands; 
  }; 