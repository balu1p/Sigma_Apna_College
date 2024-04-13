const express = require('express');
const app = express();

let port = 8080;

app.listen(port, ()=> {
    console.log(`port listening on ${port}`)
})


app.get('/', (req, res)=> {

    res.send({
        name: 'Balu'
    })
})
app.get('/username', (req, res)=> {
    
    res.send({
        username: '@balupatil'
    })
})

// Path Parameters
app.get('/:name/:id', (req, res)=> {
    const { name, id } = req.params;
    res.send({name, id})
})

// Query String

app.get('/search', (req, res)=> {
    const { q } = req.query;
    res.send(`search for ${q}`)
})

// app.use((req, res)=> {
//     console.log("request send server side...!")
// })