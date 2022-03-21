const express = require('express');
const path = require('path');
const app = express();


app.use(express.static('public'));

app.get('/', function(requestObject, responseObject) {
    responseObject.sendFile(path.resolve(__dirname, './template/index.html'));
});

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.listen(port, hostname, () => {
    console.log(`Sunucu şu adreste koşuyor... ${hostname}:${port}/`);
})
