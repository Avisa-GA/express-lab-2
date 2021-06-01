
const express = require('express');

const app = express();

const port = 3000;

app.get('/greeting/:name', (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name)
})

app.listen(port, () => {
    console.log('Express is listening on port', port)
})