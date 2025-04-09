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
      }
    }); 
   
    return Werknemers; 
  }; 