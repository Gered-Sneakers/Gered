const db = require("../models");
const Werknemers = db.werknemers; 
//const Op = db.Sequelize.Op; 
const { Op } = require("sequelize");
 
// Create and Save a new Werknemers
exports.create = (req, res) => {
    console.log("📥 Data received:", req.body);
    
    const werknemer = {
      id: req.body.id,
      name: req.body.name,
      pass: req.body.pass,
      isActive: req.body.isActive
    };
  
    Werknemers.create(werknemer)
      .then(data => {
        console.log("✅ Werknemer saved:", data);
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

exports.findByName = (req, res) => {
  const name = req.query.name;
  const query = name ? { name: name }: null;

  Werknemers.findOne({
    where:  query 
  })
    .then(data => res.send(data))
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured."
      })
    })
};

exports.login = async (req,res) => {
  const { name, password } = req.body;
  
  try{
    const user = await Werknemers.findOne({where: {name}})
    
    if(!user) return res.status(404).send({ message: "User not found"});

    if(user.pass !== password ) return res.status(401).send({ message: "Incorrect password"});

    return res.status(200).send({
      id: user.id,
      name: user.name,
      message: "Login Successfull"
    })
  }
  catch(err){
    res.status(500).send({
      message: err.message || "Server Dead"
    });
  }
  
}

exports.adminLogin = async (req, res) => {
  const { name, password } = req.body;

  try {
    if (name !== "Matt" && name !== "Asem" && name !== "Admin") return res.status(403).send({ message: "Admins only" });

    const user = await Werknemers.findOne({ where: { name } });

    if (!user) return res.status(404).send({ message: "User not found" });
    if (user.pass !== password) return res.status(401).send({ message: "Incorrect password" });

    return res.status(200).send({
      id: user.id,
      name: user.name,
      message: "Admin login successful"
    });

  } catch (err) {
    return res.status(500).send({ message: err.message || "Server error" });
  }
};
 
// Update a Werknemers by the id in the request 
exports.update = (req, res) => {
  const id = req.params.id;

  Werknemers.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Werknemer updated successfully." });
      } else {
        res.status(404).send({ message: `Werknemer with id=${id} not found.` });
      }
    })
    .catch(err => {
      res.status(500).send({ message: "Error updating Werknemer with id=" + id });
    });
}; 
 
// Delete a Werknemers with the specified id in the request 
exports.delete = (req, res) => {
  
}; 
 
// Delete all Werknemers from the database. 
exports.deleteAll = (req, res) => {}; 
 
// Find all published Werknemers 
exports.findAllPublished = (req, res) => {}; 