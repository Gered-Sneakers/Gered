module.exports = app => { 
    const werknemers = require("../controllers/werknemer.controller.js"); 
   
    var router = require("express").Router(); 

    router.post("/", werknemers.create); 
    router.post("/login", werknemers.login);
    router.post("/admin", werknemers.adminLogin);

    router.get("/", werknemers.findAll); 
    router.get("/published", werknemers.findAllPublished); 
    router.get("/search", werknemers.findByName);
    router.get("/:id", werknemers.findOne); 

    router.put("/:id", werknemers.update); 

    router.delete("/:id", werknemers.delete); 
    router.delete("/", werknemers.deleteAll); 
   
    app.use('/api/werknemers', router); 
  }; 

  console.log("✅ werknemers routes loaded");