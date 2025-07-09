module.exports = app => { 
    const repairs = require("../controllers/repairs.controller.js"); 
   
    var router = require("express").Router(); 
   
    router.post("/", repairs.create); 
    router.get("/", repairs.findAll); 
    router.put("/:id", repairs.update); 
   
    app.use('/api/repairs', router); 
  }; 

  console.log("✅ Repairs routes loaded");