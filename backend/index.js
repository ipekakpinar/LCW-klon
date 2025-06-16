const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

let users = JSON.parse(fs.readFileSync("users.json", "utf-8"));

// Giriş
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Geçersiz e-posta veya şifre" });
  }

  const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ message: "Giriş başarılı", token });
});

// Kayıt
app.post("/register", (req, res) => {
  const { email, password } = req.body;

  // Kullanıcı zaten kayıtlı mı?
  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "Bu e-posta zaten kayıtlı." });
  }

  const newUser = { email, password };
  users.push(newUser);

  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));

  res.status(201).json({ message: "Kayıt başarılı" });
});

app.listen(5000, () => {
  console.log("Backend 5000 portunda çalışıyor");
});
