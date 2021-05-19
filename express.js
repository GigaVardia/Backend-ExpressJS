const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const authRoutes = require('./routes/auth.routes');

const app = express();

app.use(express.json({extended: true}));
app.use(cookieParser());
app.use(compression());
app.use(cors());
app.use('/', userRoutes);
app.use('/', authRoutes);

app.use((err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        res.status(401).json({error: err.name + ": " + err.message});
    } else if (err) {
        res.status(400).json({error: err.name + ": " + err.message});
        console.log(err);
    }
})

module.exports = app;