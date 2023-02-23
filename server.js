const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const session = require(`express-session`);
// const MongoStore = require(`connect-mongo`);

const AdsController = require(`./controllers/ad.controller`)


const PORT = process.env.PORT || 8000;
const USER_NAME = `UserKodilla`;
const USER_PASSWORD = `UserKodilla1`; // Przenieśc do zmiennych środowiskowych na serwer
const DATA_BASE_NAME = `noticeBoard`;

const usersRooutes = require('./routes/users.routes');
const adsRoutes = require('./routes/ads.routes');

const app = express();


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
    secret: `xvn091cba`,
    cookie: { maxAge: 30000 },
    saveUninitialized: false,
}));


app.use(`/api`, cors(), adsRoutes);
app.use(`/auth`, usersRooutes);

app.use(express.static(path.join(__dirname, '/client/build')));
app.use(express.static(path.join(__dirname, '/public')));

app.use((req, res) => {
    res.status(404).send('404 not found...');
})

mongoose.connect(`mongodb+srv://${USER_NAME}:${USER_PASSWORD}@cluster0.pv477hr.mongodb.net/${DATA_BASE_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true });
const db = mongoose.connection;


db.once('open', () => {
    console.log('Connected to the database');
});
db.on('error', err => console.log('Error ' + err));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

