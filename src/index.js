// Importing Npm Packages //
const express = require('express');
const hbs = require('hbs');
const path = require('path');
const os = require('os');
const http = require('http');
const fs = require('fs');
const chalk = require('chalk');

// App Envirement Setup //
const app = express();
const port = process.env.PORT || 8080 ;

// Path Decleration | Path that Goes in Public And Templates Folder //
const staticPath = path.join( __dirname , '../public');
const templatesPath = path.join(__dirname, '../templates/views');

// Using App To Preform Tasks //
app.use(express.static(staticPath));
// set hbs view engine in express //
app.set('view engine', 'hbs');
app.set('views', templatesPath);
// partials regiatering process //
hbs.registerPartials(__dirname + '/../templates/partials');

// App Page Routing //
// Home Page //
app.get('/' , (req , res) => {
    res.sendFile(index.html);
});

// About Page //
app.get('/about' , (req , res) => {
    res.sendFile(about.html);
});

// Contact Page //
app.get('/contact' , (req , res) => {
    res.sendFile(contact.html);
});

// 404 Error Page //
app.get('*' , (req , res) => {
    res.render('404');
});

// App Listining To Server //
app.listen(port , () => {
    console.log(`${chalk.red.bgBlue('App is listining on')}   ${chalk.red.bgBlue.bold('http://127.0.0.1:8080')}`);
});