// require package/ dependencies
const express = require('express');

// initilize the express application
const app = express();

const port = 3000;


// define our routes
// routers run code as reponse to a request
app.get('/greeting/:name', (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name)
})

app.listen(port, () => {
    console.log('Express is listening on port', port)
})