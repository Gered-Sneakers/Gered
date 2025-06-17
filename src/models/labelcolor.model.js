module.exports = (sequelize, Sequelize) => { 
    const Labelcolors = sequelize.define("Labelcolor", { 
      id: { 
        type: Sequelize.UUID,        
        primaryKey: true,
      }, 
      name: { 
        type: Sequelize.STRING 
      }, 
      colorCode: { 
        type: Sequelize.STRING 
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1,
        allowNull: false
      }
    }); 
   
    return Labelcolors; 
  }; 