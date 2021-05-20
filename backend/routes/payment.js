const { Router } = require('express');
const { initializePayment, verifyPayment } = require('../controllers/payment');

const router = Router();

router.post('/initializePayment', initializePayment);

router.get('/verifyPayment/:ref', verifyPayment);

router.post('/pay', verifyPayment);

module.exports = router;
