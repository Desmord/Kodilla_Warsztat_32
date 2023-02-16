const User = require('../models/user.model');

exports.getUser = async (req, res) => {
// jeden konkrenty na bazie id
    try {
        res.json({ message: `Pobierz użytkownia.` })
    } catch (err) {
        res.json({ message: `Bład pobierania.` })
    }

};

exports.postUserLogin = async (req, res) => {

    try {
        res.json({ message: `Zaloguj użytkownika.` })
    } catch (err) {
        res.json({ message: `Bład pobierania.` })
    }

};

exports.postUserRegister = async (req, res) => {

    try {
        res.json({ message: `Zarejestruj uzytkownika.` })
    } catch (err) {
        res.json({ message: `Bład pobierania.` })
    }

};

