//require("dotenv").config();
require('dotenv').config({path: __dirname + '/.env'})
//console.log(process.env);
console.log(`WELCOME : ${process.env.WELCOME}`);
console.log(`NODEHOST : ${process.env.NODEHOST}`);
console.log(`NODEPORT : ${process.env.NODEPORT}`);

// initialisation du model
const Utilisateurs = require("./model/utilisateur");
const UserRouter = require("./routes/usroutes");

// On instancie express
const express = require("express");
const app = express();

// On charge "path"
const path = require("path");

// On autorise le dossier "public"
app.use(express.static(path.join(__dirname, "public")));

const bodyParser = require('body-parser');
// permet de gerer les inputs json (ex : postman)
app.use(bodyParser.json());
// permet de gerer les inputs à partir d'un formulaire
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/",UserRouter);

// On crée le serveur http
const http = require("http").createServer(app);

const HOSTNAME = process.env.NODEHOST || '127.0.0.1';
const PORT = process.env.NODEPORT || 3000;

// Mise en place du serveur
//const server = http.createServer();
/*const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain;charset=utf-8');
    //res.setHeader("Content-Type", "application/json; charset=utf-8");
    //res.end('Hello World');
    res.end('Premier server node lancé');
  });
*/
// Écoute du port

//server.listen(PORT);
//server.on("listening", () => console.log(`Serveur actif sur le port ${PORT}`));
http.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
  });

/*
GET /users
GET /users/:id
POST /users
PUT /users/:id
DELETE /users/:id
*/