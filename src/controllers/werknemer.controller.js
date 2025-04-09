const db = require("../models");
const Werknemers = db.werknemers; 
const Op = db.Sequelize.Op; 
 
// Create and Save a new Werknemers
exports.create = (req, res) => {
    console.log("📥 Data received:", req.body);
    
    const werknemer = {
      id: req.body.id,
      name: req.body.name,
      pass: req.body.pass
    };
  
    Werknemers.create(werknemer)
      .then(data => {
        console.log("✅ Werknemers saved:", data);
        res.send(data);
      })
      .catch(err => {
        console.error("❌ Error saving werknemer:", err);
        res.status(500).send({
          message: err.message || "Some error occurred while creating the werknemer."
        });
      });
  };
 
// Retrieve all Werknemers from the database. 
exports.findAll = (req, res) => {
    
    Werknemers.findAll()
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
 
// Find a single Werknemers with an id 
exports.findOne = (req, res) => {
  const id = req.params.id;

  Werknemers.findByPk(id)
    .then(data => {
      if (data) res.send(data);
      else res.status(404).send({
        message: `Werknemer with ID=${id} not found.`
      })
    })
    .catch(err => {
      console.error("❌ Error retrieving werknemer:", err);
      res.status(500).send({
        message: `Error retrieving werknemer with ID=${id}`
      })
    })


}; 
 
// Update a Werknemers by the id in the request 
exports.update = (req, res) => {}; 
 
// Delete a Werknemers with the specified id in the request 
exports.delete = (req, res) => {}; 
 
// Delete all Werknemers from the database. 
exports.deleteAll = (req, res) => {}; 
 
// Find all published Werknemers 
exports.findAllPublished = (req, res) => {}; 