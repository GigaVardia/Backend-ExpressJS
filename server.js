const mongoose = require('mongoose');
const app = require('./express');
require('dotenv').config();

mongoose
    .connect(process.env.MONGO_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
    .catch(error => console.log(error));

mongoose.connection.on('error', err => {
    throw new Error(`Unable to connect to database.`, e);
});

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.info(`Server started on port ${process.env.PORT}`);
});

