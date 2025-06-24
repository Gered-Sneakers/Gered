const express = require("express"); 
const cors = require("cors");

require('dotenv').config();

const path = require('path');
//const uploadRoutes = require('./src/routes/image.routes');
const uploadRoutes = require('./src/routes/upload'); // require('./src/routes/upload');

const app = express(); 
 
var corsOptions = { 
  origin: "http://localhost:8081",
  credentials: true 
}; 

app.use(cors(corsOptions));   // cors
app.use(express.json());      // parse requests of content-type - application/json 
app.use(express.urlencoded({ extended: true }));  // parse requests of content-type - application/x-www-form-urlencoded
app.use('/public', express.static('public')); 
app.use('/api', uploadRoutes);                    // make folder accessible
//app.use('/brands', express.static(path.join(__dirname, 'public/uploads')));
require("./src/routes/auth.routes")(app);

const db = require("./src/models"); 
db.sequelize.sync();
require("./src/routes/sneaker.routes.js")(app);
require("./src/routes/leverancier.routes.js")(app);
require("./src/routes/werknemer.routes.js")(app);
require("./src/routes/brand.routes.js")(app); 
require("./src/routes/labelcolor.routes.js")(app);

app._router.stack
  .filter(r => r.route)
  .forEach(r => console.log("📦 Route:", r.route.path));
 
// set port, listen for requests 
const PORT = process.env.PORT || 8080; 
app.listen(PORT, () => { 
  console.log(`Server is running on port ${PORT}.`); 
}); 