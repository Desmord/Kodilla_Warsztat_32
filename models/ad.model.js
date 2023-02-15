const mongoose = require(`mongoose`);

const adSchema = new mongoose.Schema({
    title: { type: String, require: true, minLength: 10, maxLength: 50 },
    content: { type: String, require: true, minLength: 20, maxLength: 1000 },
    publishDate: { type: Date, require: true },
    img: String,
    price: { type: Number, require: true },
    location: { type: String, require: true },
    author: { type: String, ref: `User` } // Czy poprawnie ref
});

module.exports = mongoose.model(`Ad`, adSchema);