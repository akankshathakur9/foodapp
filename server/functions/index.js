const functions = require("firebase-functions");
const admin = require ("firebase-admin");
require('dotenv').config();

const serviceAccountKey = require('./serviceAccountKey.json');

const express = require('express');
const app = express();
    
// Body parser for  our JSON data
app.use(express.json());

// cross orgin

const cors = require("cors");
app.use(cors({origin: true}));
app.use((re, res, next) => { 
 res.set("Acess-Control-Allow-Origin", "*");
 next();
});

// firebase credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
    
});

app.get("/",(req, res) =>{
    return res.send("hello word");
});

exports.app = functions.https.OnRequest(app);