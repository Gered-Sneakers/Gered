const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Werknemer = db.werknemers;
const secret = "your-secret-key"; // Use .env in real projects

exports.login = async (req, res) => {
  const { name, pass } = req.body;
  console.log("📥 Inlogpoging:", { name, pass });

  try {
    const user = await Werknemer.findOne({ where: { name } });

    if (!user) {
      console.log("❌ Gebruiker niet gevonden");
      return res.status(404).send("Gebruiker niet gevonden");
    }
    console.log("BOLLEIEIEIEIEIEIEIEIEIEIEIEIE");
    console.log(user.isActive);
    if (!user.isActive) return res.status(403).send("Gebruiker is gedeactiveerd");

    const valid = await bcrypt.compare(pass, user.pass);
    console.log("✅ bcrypt result:", valid);

    if (!valid) {
      console.log("❌ Ongeldig wachtwoord");
      return res.status(401).send("Ongeldig wachtwoord");
    }

    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, secret, {
      expiresIn: "2h"
    });

    res.send({
      token,
      user: { id: user.id, name: user.name, isAdmin: user.isAdmin }
    });
  } catch (err) {
    console.error("❌ Interne fout bij login:", err);
    res.status(500).send("Fout bij inloggen");
  }
};


