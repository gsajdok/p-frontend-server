import express = require('express');
import path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/*name', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
})

app.listen(3000);