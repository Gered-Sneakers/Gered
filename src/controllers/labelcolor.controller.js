const db = require("../models");
const Labelcolors = db.labelcolors; 

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

exports.findOne = (req, res) => {}; 
 

exports.update = (req, res) => {
  const id = req.params.id;
  Labelcolors.update(req.body, {
    where: { id: id}
  })
  .then(num => {
    if(num == 1){
      res.send({ message: "Labelcolor updated successfully."});
    }
    else{
      res.status(404).send({ message : `Labelcolor with id=${id} not found.`})
    }
  })
  .catch(err => {
    res.status(500).send({ message: "Error updating the brand with id " + id })
  })
}; 

exports.delete = (req, res) => {}; 
 
exports.deleteAll = (req, res) => {}; 
 
exports.findAllPublished = (req, res) => {}; 