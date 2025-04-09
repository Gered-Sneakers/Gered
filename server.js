const express = require("express"); 
const cors = require("cors"); 
 
const app = express(); 
 
var corsOptions = { 
  origin: "http://localhost:8081" 
}; 
 
app.use(cors(corsOptions)); 
 
// parse requests of content-type - application/json 
app.use(express.json()); 
 
// parse requests of content-type - application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true })); 

const db = require("./src/models"); 
db.sequelize.sync();
require("./src/routes/sneaker.routes.js")(app);
require("./src/routes/leverancier.routes.js")(app);
require("./src/routes/werknemer.routes.js")(app);

// simple route 
app.get("/", (req, res) => { 
  res.json({ message: "Welcome to bezkoder application." }); 
}); 

app._router.stack
  .filter(r => r.route)
  .forEach(r => console.log("📦 Route:", r.route.path));
 
// set port, listen for requests 
const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}.`); 
}); 