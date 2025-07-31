const express = require('express');
const viewController = require('../controllers/viewController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();

router.use(viewController.alerts);

router.get('/', authController.isLogged, viewController.getOverview);

router.get('/tour/:slug/', authController.isLogged, viewController.getTour);
router.get('/login', authController.isLogged, viewController.getLoginForm);
router.get('/signup', authController.isLogged, viewController.getSignupForm);
router.get('/me', authController.protect, viewController.getAccount);

router.get(
  '/my-tours',
  // bookingController.createBookingCheckout,
  authController.protect,
  viewController.getMyTours,
);

module.exports = router;
