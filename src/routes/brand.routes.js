module.exports = app => { 
    const brands = require("../controllers/brand.controller.js"); 
    console.log("brands.findAll:", brands.findAll);
    
    var router = require("express").Router(); 
   
    router.post("/", brands.create); 
    router.get("/", brands.findAll); 
    router.get("/published", brands.findAllPublished); 
    router.get("/:id", brands.findOne); 
    router.put("/:id", brands.update); 
    router.delete("/:id", brands.delete); 
    router.delete("/", brands.deleteAll); 
   
    app.use('/api/brands', router); 
  }; 

  console.log("✅ brands routes loaded");