const db = require("../models");
const Brands = db.brands; 
const Op = db.Sequelize.Op; 
 
// Create and Save a new Brands
exports.create = (req, res) => {
    console.log("📥 Data received:", req.body);
    
    const brand = {
      id: req.body.id,
      name: req.body.name,
      img: req.body.img
    };
  
    Brands.create(brand)
      .then(data => {
        console.log("✅ Brands saved:", data);
        res.send(data);
      })
      .catch(err => {
        console.error("❌ Error saving brand:", err);
        res.status(500).send({
          message: err.message || "Some error occurred while creating the brand."
        });
      });
  };
 
// Retrieve all Brands from the database. 
exports.findAll = (req, res) => {
    
    Brands.findAll()
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
exports.findOne = (req, res) => {
  const id = req.params.id;

  Brands.findByPk(id)
    .then(data => {
      if (data) res.send(data);
      else res.status(404).send({
        message: `Brands with ID=${id} not found.`
      })
    })
    .catch(err => {
      console.error("❌ Error retrieving brand:", err);
      res.status(500).send({
        message: `Error retrieving brand with ID=${id}`
      })
    })


}; 

 
// Update a Brands by the id in the request 
exports.update = (req, res) => {
  const id = req.params.id;
  Brands.update(req.body, {
    where: { id: id}
  })
  .then(num => {
    if(num == 1){
      res.send({ message: "Brand updated successfully."});
    }
    else{
      res.status(404).send({ message : `Werknemer with id=${id} not found.`})
    }
  })
  .catch(err => {
    res.status(500).send({ message: "Error updating the brand with id " + id })
  })
}; 
 
// Delete a Brands with the specified id in the request 
exports.delete = (req, res) => {}; 
 
// Delete all Brands from the database. 
exports.deleteAll = (req, res) => {}; 
 
// Find all published Brands 
exports.findAllPublished = (req, res) => {}; 