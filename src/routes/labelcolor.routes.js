module.exports = app => { 
    const labelcolors = require("../controllers/labelcolor.controller.js"); 
    //console.log("brands.findAll:", brands.findAll);
    
    var router = require("express").Router(); 
   
    router.post("/", labelcolors.create); 
    router.get("/", labelcolors.findAll); 
    router.get("/published", labelcolors.findAllPublished); 
    router.get("/:id", labelcolors.findOne); 
    router.put("/:id", labelcolors.update); 
    router.delete("/:id", labelcolors.delete); 
    router.delete("/", labelcolors.deleteAll); 
   
    app.use('/api/labelcolors', router); 
  }; 

  console.log("✅ labelcolors routes loaded");