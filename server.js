require('dotenv').config();
const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.status(200).send("System is up and running");
});

const port = process.env.PORT || 5050 
server.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});

module.exports = server;