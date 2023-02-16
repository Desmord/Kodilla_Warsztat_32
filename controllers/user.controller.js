const User = require('../models/user.model');

exports.getUserByID = async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) res.status(404).json({ message: 'Nie znaleziono' });
        else res.json(user);

    } catch (err) {
        res.status(500).json({ message: `Bład pobierania użytkownika.` })
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

