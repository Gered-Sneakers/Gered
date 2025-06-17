module.exports = (sequelize, Sequelize) => { 
    const Werknemers = sequelize.define("Werknemer", { 
      id: { 
        type: Sequelize.UUID,        
        primaryKey: true,
      }, 
      name: { 
        type: Sequelize.STRING,
        allowNull: false
      },
      pass: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1,
        allowNull: false
      },
      isAdmin: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
        allowNull: false
      }
    }); 
   
    return Werknemers; 
  }; 