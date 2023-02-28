const express = require('express');
const router = express.Router();
const imageUpload = require('../utils/imageUpload');

const AdsController = require('../controllers/ad.controller');

router.get(`/ads`, AdsController.getAll);
router.get(`/:id`, AdsController.getById)
router.get(`/ads/search/:searchPhrase`, AdsController.getAllByTitle);
router.post(`/ads`, imageUpload.single(`img`), AdsController.postAd);
router.delete(`/:id`, AdsController.deleteAd);
router.post('/adsp',imageUpload.single(`img`), AdsController.putAd);

module.exports = router;