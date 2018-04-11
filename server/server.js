const express = require('express');
const app = express();
const data = require('./data/data.json');

app.get('/', (req, res) => {
    res.send(data)
});

app.listen(3000, () => {
    console.log('\x1b[36m%s\x1b[0m', 'Essence FE test server running on', 'http://localhost:3000');
});