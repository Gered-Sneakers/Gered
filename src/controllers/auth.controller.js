const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Werknemer = db.werknemers;
const secret = "your-secret-key"; // Use .env in real projects

exports.login = async (req, res) => {
  const { name , password } = req.body;
  try {
    const user = await Werknemer.findOne({ where: { name } });
    if (!user) return res.status(404).send("Gebruiker niet gevonden");
/*
    const valid = await bcrypt.compare(password, user.pass);
    if (!valid) return res.status(401).send("Ongeldig wachtwoord");
*/
    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, secret, {
      expiresIn: "2h"
    });

    res.send({
      token,
      user: { id: user.id, name: user.name, isAdmin: user.isAdmin }
    });
  } catch (err) {
    res.status(500).send("Fout bij inloggen");
  }
};

