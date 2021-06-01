// require package/ dependencies
const express = require('express');

// initilize the express application
const app = express();
 // constant
const port = 3000;

const magicBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
//  cached elements references
let randomAnswers = magicBall[Math.floor(Math.random() * magicBall.length)]

// define our routes
// routers run code as reponse to a request
app.get('/greeting/:name', (req, res) => {
    res.send('Wow! Hello there, ' + req.params.name)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
     res.send('Your tip is: ' + parseInt(req.params.tipPercentage))
})

app.get('/magic/:id', (req, res) => {
    res.send(req.params.id + '?' + ' Answer: ' + randomAnswers)
})

app.listen(port, () => {
    console.log('Express is listening on port', port)
})