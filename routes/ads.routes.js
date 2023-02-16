const express = require('express');
const router = express.Router();
const authMiddleware = require('../utils/authMiddleware');

const AdsController = require('../controllers/ad.controller');

router.get(`/ads`, AdsController.getAll);
router.get(`/ads/:id`, AdsController.getById);
router.get(`/ads/search/:searchPhrase`, AdsController.getAllByTitle);
router.post(`/ads`, authMiddleware, AdsController.postAd);
router.delete(`/ads/:id`, authMiddleware, AdsController.deleteAd);
router.put('/ads/:id', authMiddleware, AdsController.putAd);

module.exports = router;