// Requirement: Have a folder structure that meets the MVC paradigm
// Java Script that retrive data kept under the routes folder
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
// Requirement: Protect API keys and sensitive information with environment variables
// sensitive_information is a environmental variable that stores mysql password 
  password : process.env.sensitive_infortmation,
  database : 'hoa_fees'
});
const Homeowner = require('../models/homeowner');
// Requirement: Have both GET and POST routes for retrieving and adding new data.
// using GET to retrive here 
app.get('/homeowners', async (req, res) => {
    const homeowners = await Homeowner.findAll();
    res.json(homeowners);
});

// Requirement: Have both GET and POST routes for retrieving and adding new data.
// using POST to retrive here 
app.post('/homeowners', async (req, res) => {
    const { name, email, phone_number, address } = req.body;
    const newHomeowner = await Homeowner.create({ name, email, phone_number, address });
    res.json(newHomeowner);
});

const express = require('express');
const app = express();

app.get('/homeowners', async (req, res) => {
    const homeowners = await Homeowner.findAll();
    res.json(homeowners);
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
