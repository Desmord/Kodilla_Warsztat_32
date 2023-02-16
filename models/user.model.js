const mongoose = require(`mongoose`);

const usersSchema = new mongoose.Schema({
    login: { type: String, require: true },
    password: { type: String, require: true },
    avatar: String,
    phoneNumber: String,
});

module.exports = mongoose.model(`User`, usersSchema);