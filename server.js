const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

const adsRoutes = require('./routes/ads.routes');
const usersRooutes = require('./routes/users.routes');

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(`/api`, adsRoutes);
app.use(`/auth`, usersRooutes);

app.use(express.static(path.join(__dirname, '/client/build')));

app.use((req, res) => {
    res.status(404).send('404 not found...');
})

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})

