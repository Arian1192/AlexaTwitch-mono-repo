const express = require('express');
const ngrok = require('ngrok');
require('dotenv').config();
const kafka = require('node-rdkafka');

const app = express();
const port = process.env.PORT || 3000;

app.use('/alexa', require('./routes/alexaRoute'));

app.listen(port, async () => {
    console.log(`Listening on port ${port}`);
    const url = await ngrok.connect(port);
    console.log(`ngrok tunnel created at ${url}/alexa`);
    });