const Ad = require(`../ad.model`);
const expect = require('chai').expect;
const mongoose = require('mongoose');

const USER_NAME = `UserKodilla`;
const USER_PASSWORD = `UserKodilla1`; // Przenieśc do zmiennych środowiskowych na serwer
const DATA_BASE_NAME = `noticeBoard`;

describe('Ad', () => {

    before(async () => {

        try {
            await mongoose.connect(`mongodb+srv://${USER_NAME}:${USER_PASSWORD}@cluster0.pv477hr.mongodb.net/${DATA_BASE_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true });
        } catch (err) {
            console.error(err);
        }
    })



    after(() => {
        mongoose.models = {};
    });

});