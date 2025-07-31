/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51Rq9A61V3WHNklMjVuACeRX7oYH6LPKigcWYxQrhygo5qA6WDykPdwS7poMDL6bxz6FhdeLB3W7OhJ3IdBdwaJUB00julqo5Qz',
);
export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios({
      method: 'GET',
      url: `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    });

    console.log(session);

    // 2) Create checkout form + chanre credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id,
    // });
    window.location.assign(session.data.session.url);
  } catch (error) {
    console.log(error);
    showAlert('error', error);
  }
};
