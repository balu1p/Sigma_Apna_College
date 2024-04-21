const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override');

const app = express();
const port = 4000;

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views') );

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method'))

let employeeData = [
    {
        id: uuidv4(),
        name: "Balu Patil",
        email: "balu@123",
        profession: "Developer"
    },
    {
        id: uuidv4(),
        name: "Ashitosh Shinde",
        email: "ashya@123",
        profession: "Backend Office"
    },
    {
        id: uuidv4(),
        name: "Akki Patil",
        email: "akki@123",
        profession: "Backend Developer"
    }
];

app.get('/employee', (req, res) => {
    res.render("index.ejs", {employeeData});
});

app.get('/employee/new', (req, res)=> {
    res.render("empdata.ejs")
});

app.post('/employee', (req, res)=> {
   const { name, email, profession } = req.body;
   let id = uuidv4(); 
   employeeData.push({id, name, email, profession})
    res.redirect('/employee');
});

app.get('/employee/:id', (req, res)=> {
    const { id } = req.params;
    const emp = employeeData.find((data) => data.id === id);
    res.render('showdata.ejs', {emp});
})


app.patch('/employee/:id', (req, res)=> {
    const { id } = req.params;
    let newProf = req.body.profession;
    const emp = employeeData.find((data) => data.id === id);
    emp.profession = newProf;
    res.redirect('/employee')
})

app.get('/employee/:id/edit', (req, res) => {
    const { id } = req.params;
    const emp = employeeData.find((data) => data.id === id);
    res.render("edit.ejs", {emp});
})

app.delete('/employee/:id', (req, res) => {
    const { id } = req.params;
     employeeData = employeeData.filter((data) => data.id !== id);
    res.redirect('/employee')
})

app.listen(port, ()=> {
    console.log(`App listening on ${port}`)
});