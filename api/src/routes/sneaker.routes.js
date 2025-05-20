module.exports = app => { 
    const sneakers = require("../controllers/sneaker.controller.js"); 
   
    var router = require("express").Router(); 
   
    router.post("/", sneakers.create); 
    router.get("/", sneakers.findAll); 
    router.get("/published", sneakers.findAllPublished); 
    router.get("/:id", sneakers.findOne); 
    router.put("/:id", sneakers.update); 
    router.delete("/:id", sneakers.delete); 
    router.delete("/", sneakers.deleteAll); 
   
    app.use('/api/sneakers', router); 
  }; 

  console.log("✅ sneakers routes loaded");