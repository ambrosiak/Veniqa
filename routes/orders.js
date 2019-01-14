import express from 'express';
import orderController from '../controllers/orderController';
import passportAuth from '../authentication/passportAuth';
var router = express.Router();

/* GET ORDERS Endpoint. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Veniqa Orders' });
});

router.post('/createCheckout', passportAuth.isAuthenticated, orderController.createCheckout);

router.post('/createPaymentToken', passportAuth.isAuthenticated, orderController.createPaymentToken);

router.post('/completeCheckout', passportAuth.isAuthenticated, orderController.completeCheckout);

module.exports = router;