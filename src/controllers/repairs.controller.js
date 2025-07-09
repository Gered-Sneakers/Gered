const db = require("../models");
const Repairs = db.repairs; 

exports.create = (req, res) => { 
  
};
/*
exports.findAll = (req, res) => {
    Repairs.findAll()
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
*/

exports.findAll = async (req, res) => {
  try {
    const data = await Repairs.findAll(); // Sequelize model
    console.log("DEKEKEKKEKEKEEEEE@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
    console.log(data);
    res.send(data);
  } catch (err) {
    console.error("Repairs findAll error:", err);
    res.status(500).send({ message: "Er ging iets mis met repairs ophalen" });
  }
};

exports.findOne = (req, res) => {}; 
 

exports.update = (req, res) => {
  const id = req.params.id;
  Repairs.update(req.body, {
    where: { id: id}
  })
  .then(num => {
    if(num == 1){
      res.send({ message: "Repairs updated successfully."});
    }
    else{
      res.status(404).send({ message : `Repairs with id=${id} not found.`})
    }
  })
  .catch(err => {
    res.status(500).send({ message: "Error updating the brand with id " + id })
  })
}; 

exports.delete = (req, res) => {}; 
 
exports.deleteAll = (req, res) => {}; 
 
exports.findAllPublished = (req, res) => {}; 