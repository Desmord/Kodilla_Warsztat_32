const Ad = require('../models/ad.model');

exports.getAll = async (req, res) => {

    try {
        res.json({ message: `Pobierz wszystkie.` })
    } catch (err) {
        res.json({ message: `Bład pobierania wszystkich.` })
    }

};

exports.getById = async (req, res) => {

    try {
        res.json({ message: `Pobierz wybrany po Id.` })
    } catch (err) {
        res.json({ message: `Bład pobierania.` })
    }

}

exports.getAllByTitle = async (req, res) => {

    try {
        res.json({ message: `Pobierz wszystkie wyszukane.` })
    } catch (err) {
        res.json({ message: `Bład pobierania.` })
    }

}

exports.postAd = async (req, res) => {

    try {
        res.json({ message: `Dodanie nowego.` })
    } catch (err) {
        res.json({ message: `Bład Dodawania.` })
    }

}

exports.putAd = async (req, res) => {

    try {
        res.json({ message: `Edycja.` })
    } catch (err) {
        res.json({ message: `Bład edytowania.` })
    }

}

exports.deleteAd = async (req, res) => {

    try {
        res.json({ message: `Usunięcie po Id.` })
    } catch (err) {
        res.json({ message: `Bład usuwania.` })
    }

}