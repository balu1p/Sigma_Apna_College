const express = require('express');
const path = require('path');

const app = express();
const port = 5000;

app.set("views", path.join(__dirname, 'views'));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public/css')));
app.use(express.static(path.join(__dirname, 'public/js')));

app.listen(port, ()=> {
    console.log(`App listening on ${port}`)
})

app.get('/hello',(req, res)=> {
    res.send("Hellow World!!...")
})

app.get('/',(req, res)=> {
    res.render("home.ejs")
})
app.get('/rolldice',(req, res)=> {
    let rollNum = Math.floor(Math.random()*6)+1 
    res.render("rolldice.ejs", {num : rollNum})
})

app.get('/ig/:username', (req, res)=> {
    const { username } = req.params;
    const instaData = require('./data.json');
    const data = instaData[username];
    if(data) {
        res.render("instagram.ejs", { data });
    } else {
        res.render('error.ejs')
    }
    
}) 