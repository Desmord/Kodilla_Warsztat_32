const express = require('express');
const router = express.Router();

const AdsController = require('../controllers/ad.controller');

router.get(`/ads`, AdsController.getAll);
router.get(`/ads/:id`, AdsController.getById);
router.get(`/ads/search/:searchPhrase`, AdsController.getAllByTitle);
router.post(`/ads`, AdsController.postAd);
router.delete(`/ads/:id`, AdsController.deleteAd);
router.put('/ads/:id', AdsController.putAd);

module.exports = router;