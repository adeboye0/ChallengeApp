const express = require('express');
const cors = require('cors');
const webRoute = require('./routes/web');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

var port = process.env.PORT || 5001;

require('dotenv').config();

app.use(cors());
app.use(express.json());

if (process.env.ENV === 'production') {
    app.use(express.static(path.join(__dirname, "client/build")));
}

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => console.log('MongoDb connected')).catch(err => console.log(err));


app.use(function (req, res, next) {
    res.locals.baseHost = req.protocol + '://' + req.hostname;
    res.locals.Request = {
        query: req.query,
        params: req.params
    };
    console.log((new Date).toLocaleString() + ' - ', req.method + ': ' + res.locals.baseHost + req.url)
    next();
});

app.use('/', webRoute);

app.listen(port, function () {
    console.log("Server started on port " + port);
})