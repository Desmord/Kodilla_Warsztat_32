const bcrypt = require('bcryptjs');
const User = require('../models/user.model');
const getImageFileType = require(`../utils/getImageFileType`);
const fs = require(`fs`)

exports.getUsers = async (req, res) => {

    try {
        const users = await User.find();

        if (users && users.length) {
            res.json(users)
        }

    } catch (err) {
        res.status(500).json({ message: `Bład pobierania wszystkich.` })
    }

};

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

    const { login, password } = req.body;

    try {
        const userWithLogin = await User.findOne({ login });

        if (!userWithLogin) {
            return res.status(400).json({ message: `Zły login lub hasło.` })
        } else {

            if (bcrypt.compareSync(password, userWithLogin.password)) {
                req.session.user = { login: userWithLogin.login, id: userWithLogin._id };
                res.status(200).json({
                    message: `Logowanie poprawne.`,
                    login: userWithLogin.login,
                    id: userWithLogin._id,
                })
            } else {
                res.json({ message: `Bład podczas logowania.` })
            }

        }

    } catch (err) {
        res.json({ message: `Bład pobierania.` })
    }

};


exports.postUserRegister = async (req, res) => {

    const { login, password, phoneNumber, avatar } = req.body;
    const { filename } = req.file;
    const fileType = req.file ? await getImageFileType(req.file) : `unknown`;


    try {
        const userWithLogin = await User.findOne({ login });

        if (userWithLogin) {
            await fs.unlinkSync(`${__dirname}/../public/uploads/${filename}`)
            return res.status(409).json({ message: `Użytkownik istnieje.` })
        } else {

            if (filename && (fileType === `image/png` || fileType === `image/jpeg` || fileType === `image/gif`)) {
                const newUser = new User({
                    login,
                    password: await bcrypt.hash(password, 10),
                    avatar: filename,
                    phoneNumber
                });
                await newUser.save();

                res.status(201).json({ message: `Użytkownik zajestrowany.` })
            } else {
                res.status(401).json({ message: `Brak pliku z avatarem.` })
            }

        }

    } catch (err) {
        console.log(err)
        await fs.unlinkSync(`${__dirname}/../public/uploads/${filename}`)
        res.json({ message: `Bład pobierania.` })
    }

};

exports.postLogOut = async (req, res) => {

    try {
        req.session.destroy();
        res.status(201).json({ message: `Wylogowanie poprawne.` })
    } catch (err) {
        res.json({ message: `Bład wylogowywania.` })
    }

};