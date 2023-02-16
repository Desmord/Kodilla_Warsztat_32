const Ad = require('../models/ad.model');

exports.getAll = async (req, res) => {

    try {
        const ads = await Ad.find();

        if (ads && ads.length) {
            res.json(ads)
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: `Bład pobierania wszystkich.` })
    }

};

exports.getById = async (req, res) => {

    try {
        const ads = await Ad.findById(req.params.id);

        if (!ads) res.status(404).json({ message: 'Nie znaleziono' });
        else res.json(ads);

    } catch (err) {
        res.status(500).json({ message: `Bład pobierania po id.` })
    }

}

exports.getAllByTitle = async (req, res) => {

    const searchPhrase = req.params.searchPhrase;

    try {
        const ads = await Ad.find({ title: { $regex: searchPhrase, $options: 'gim' } });

        if (!ads) res.status(404).json({ message: 'Nie znaleziono' });
        else res.json(ads);

    } catch (err) {
        res.status(500).json({ message: `Bład pobierania po id.` })
    }

}


// Walidacje pustych zroibc po stronie clienta
exports.postAd = async (req, res) => {
    try {

        const { title, content, publishDate, img, price, location, author } = req.body;
        const newAd = new Ad({ title, content, publishDate, img, price, location, author });

        await newAd.save();

        res.json({ message: `Dodanie nowego ogłosznia poprawne.` })

    } catch (err) {
        res.status(500).json({ message: `Bład Dodawania.` })
    }

}

// Walidacje pustych zroibc po stronie clienta
exports.putAd = async (req, res) => {

    const { title, content, publishDate, img, price, location, author, id } = req.body;

    try {

        if (req.session.user.id === author) {

            await Ad.updateOne({ _id: id }, { title, content, publishDate, img, price, location, author })

            res.json({ message: `Edycja ogłosznenia udana.` })
        } else {
            res.status(500).json({ message: `Brak uprawnień edycji.` })
        }

    } catch (err) {
        res.status(500).json({ message: `Bład edytowania.` })
    }

}

// Walidacje pustych zroibc po stronie clienta
exports.deleteAd = async (req, res) => {

    try {

        const ads = await Ad.findById(req.params.id);

        if (ads && req.session.user.id === ads.author) {
            await Ad.deleteOne({ _id: req.params.id });
            res.status(201).json({ message: `Usunięcie obiektu Udane.` })
        }
        else res.status(404).json({ message: 'Bład podczas usuwania. Brak uprawnień.' });

    } catch (err) {
        console.log(err)
        res.status(500).json({ message: `Bład usuwania.` })
    }

}