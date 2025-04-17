const db = require("../models");
const Leveranciers = db.leveranciers; 
const Op = db.Sequelize.Op; 
 
// Create and Save a new Leveranciers
exports.create = (req, res) => {
    console.log("📥 Data received:", req.body);
    
    const leverancier = {
      id: req.body.id,
      name: req.body.name
    };
  
    Leveranciers.create(leverancier)
      .then(data => {
        console.log("✅ Leveranciers saved:", data);
        res.send(data);
      })
      .catch(err => {
        console.error("❌ Error saving leverancier:", err);
        res.status(500).send({
          message: err.message || "Some error occurred while creating the leverancier."
        });
      });
  };
 
// Retrieve all Leveranciers from the database. 
exports.findAll = (req, res) => {
    
    Leveranciers.findAll()
        .then(data =>{
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            })
        })
}; 
 
// Find a single Leveranciers with an id 
exports.findOne = (req, res) => {
  const id = req.params.id;

  Leveranciers.findByPk(id)
    .then(data => {
      if (data) res.send(data);
      else res.status(404).send({
        message: `Leverancier with ID=${id} not found.`
      })
    })
    .catch(err => {
      console.error("❌ Error retrieving leverancier:", err);
      res.status(500).send({
        message: `Error retrieving leverancier with ID=${id}`
      })
    })


}; 
 
// Update a Leveranciers by the id in the request 
exports.update = (req, res) => {}; 
 
// Delete a Leveranciers with the specified id in the request 
exports.delete = (req, res) => {}; 
 
// Delete all Leveranciers from the database. 
exports.deleteAll = (req, res) => {}; 
 
// Find all published Leveranciers 
exports.findAllPublished = (req, res) => {}; 