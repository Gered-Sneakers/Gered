const db = require("../models");
const Sneakers = db.sneakers; 
const Op = db.Sequelize.Op; 
 
// Create and Save a new Sneakers
exports.create = (req, res) => {
    console.log("📥 Data received:", req.body);
    
    const sneaker = {
      id: req.body.id,
      colorlabel: req.body.colorlabel,
      date: req.body.date,
      brand: req.body.brand,
      model: req.body.model,
      size: req.body.size,
      colors: req.body.colors,
      supplier: req.body.supplier,
      laces: req.body.laces,
      soles: req.body.soles,
      status: req.body.status,
      teRepareren: req.body.teRepareren,
      creator: req.body.creator,
      verkoop: req.body.verkoop
      
      //published: req.body.published ?? false
    };
  
    Sneakers.create(sneaker)
      .then(data => {
        console.log("✅ Sneakers saved:", data);
        res.send(data);
      })
      .catch(err => {
        console.error("❌ Error saving sneaker:", err);
        res.status(500).send({
          message: err.message || "Some error occurred while creating the sneaker."
        });
      });
  };
 
// Retrieve all Sneakers from the database. 
exports.findAll = (req, res) => {
  Sneakers.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving sneakers."
      });
    });
}; 
 
// Find a single Sneakers with an id 
exports.findOne = (req, res) => {
  console.log(req.params);
  const id = req.params.id;

  Sneakers.findByPk(id)
    .then(data => {
      console.log("Je bent in findByPk geweest!");
      if (data) res.send(data);
      else res.status(404).send({
        message: `Sneaker with ID=${id} not found.`
      })
    })
    .catch(err => {
      console.error("❌ Error retrieving sneaker:", err);
      res.status(500).send({
        message: `Error retrieving sneaker with ID=${id}`
      })
    })


}; 
 
// Update a Sneakers by the id in the request 
exports.update = (req, res) => {
  const id = req.params.id;
  console.log("BOLLE---------------------------------------------");
  console.log(req.body);
  Sneakers.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Sneaker was updated successfully." });
      } else {
        res.status(404).send({
          message: `Cannot update Sneaker with id=${id}. Maybe Sneaker was not found or req.body is empty.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Sneaker with id=" + id
      });
    });
}; 
 
// Delete a Sneakers with the specified id in the request 
exports.delete = (req, res) => {
  const id = req.params.id;

  Sneakers.destroy({ where: { id: id } })
    .then(num => {
      if (num == 1) {
        console.log(`✅ Sneaker with id=${id} was deleted.`);
        res.send({ message: "Sneaker deleted successfully." });
      } else {
        res.status(404).send({ message: `Sneaker with id=${id} not found.` });
      }
    })
    .catch(err => {
      console.error("❌ Error deleting sneaker:", err);
      res.status(500).send({ message: "Could not delete sneaker" });
    });
}; 
 
// Delete all Sneakers from the database. 
exports.deleteAll = (req, res) => {}; 
 
// Find all published Sneakers 
exports.findAllPublished = (req, res) => {}; 