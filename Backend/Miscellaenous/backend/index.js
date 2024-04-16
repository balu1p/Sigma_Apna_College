const express = require('express');

const app = express();

const port = 7070;

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/register',(req, res)=> {
    const {user} = req.query
    res.send(`user register successfully! Welcome ${user}`)
});

app.post('/register',(req, res)=> {
    const {user} = req.body;
    res.send(`user register successfully! Welcome ${user}`)
})

app.listen(port, ()=> {
    console.log(`app listening on ${port}`);
})