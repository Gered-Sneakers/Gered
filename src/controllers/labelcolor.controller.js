const db = require("../models");
const Labelcolors = db.labelcolors; 
//const Op = db.Sequelize.Op; 
 
// Create and Save a new Brands
exports.create = (req, res) => {
    console.log("📥 Data received:", req.body);
    //console.log(req.body.)
    
    const labelColor = {
      id: req.body.id,
      name: req.body.name,
      colorCode: req.body.code
    };
    
    Labelcolors.create(labelColor)
      .then(data => {
        console.log("✅ Labelcolor saved:", data);
        res.send(data);
      })
      .catch(err => {
        console.error("❌ Error saving labelcolor:", err);
        res.status(500).send({
          message: err.message || "Some error occurred while creating the labelcolor."
        });
      });
  
};
 
// Retrieve all Brands from the database. 
exports.findAll = (req, res) => {
    Labelcolors.findAll()
        .then(data =>{
            res.send(data);
            console.log(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            })
        })
}; 
 
// Find a single Brands with an id 
exports.findOne = (req, res) => {}; 
 
// Update a Brands by the id in the request 
exports.update = (req, res) => {}; 
 
// Delete a Brands with the specified id in the request 
exports.delete = (req, res) => {}; 
 
// Delete all Brands from the database. 
exports.deleteAll = (req, res) => {}; 
 
// Find all published Brands 
exports.findAllPublished = (req, res) => {}; 