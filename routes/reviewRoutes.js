const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

// POST /tour/<<ID tour>>/reivews
// GET /tour/<<ID tour>>/reivews
// POST /reviews

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restricTo('user'),
    reviewController.setTourUserId,
    reviewController.createReview,
  );

router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restricTo('admin', 'user'),
    reviewController.updateReview,
  )
  .delete(
    authController.restricTo('admin', 'user'),
    reviewController.deleteReview,
  );

module.exports = router;
