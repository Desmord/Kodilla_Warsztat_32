const express = require('express');
const router = express.Router();
const authMiddleware = require('../utils/authMiddleware');
const imageUpload = require('../utils/imageUpload');

const AdsController = require('../controllers/ad.controller');

router.get(`/ads`, AdsController.getAll);
router.get(`/ads/:id`, AdsController.getById);
router.get(`/ads/search/:searchPhrase`, AdsController.getAllByTitle);
// router.post(`/ads`, authMiddleware, imageUpload.single(`img`), AdsController.postAd);
router.post(`/ads`, AdsController.postAd);
// router.delete(`/ads/:id`, authMiddleware, AdsController.deleteAd);
router.delete(`/ads/:id`, AdsController.deleteAd);
router.put('/ads/:id', authMiddleware, imageUpload.single(`img`), AdsController.putAd);

module.exports = router;