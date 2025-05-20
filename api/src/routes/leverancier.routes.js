module.exports = app => { 
    const leveranciers = require("../controllers/leverancier.controller.js"); 
   
    var router = require("express").Router(); 
   
    router.post("/", leveranciers.create); 
    router.get("/", leveranciers.findAll); 
    router.get("/published", leveranciers.findAllPublished); 
    router.get("/:id", leveranciers.findOne); 
    router.put("/:id", leveranciers.update); 
    router.delete("/:id", leveranciers.delete); 
    router.delete("/", leveranciers.deleteAll); 
   
    app.use('/api/leveranciers', router); 
  }; 

  console.log("✅ leveranciers routes loaded");