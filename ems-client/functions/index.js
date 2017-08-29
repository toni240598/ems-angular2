const functions = require('firebase-functions');
const express   = require("express");
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
let router = new express.Router();
router.get("*",(req,res)=>{
	res.send("hello world")
})

exports.helloWorld = functions.https.onRequest(router);
