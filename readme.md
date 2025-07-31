# 🌍 Natours Booking Website

This is a tour booking web application built with Node.js, Express, MongoDB, and Stripe. Users can browse tours, sign up, log in, make payments, and manage their bookings.

---

## 🚀 Features

- 📋 Browse all tours and detailed tour information
- 🔐 User authentication and account management
- 🛒 Book tours directly through the website
- 💳 Payment integration with Stripe or SePay
- 🛡️ Security: authentication, authorization, NoSQL injection prevention, XSS protection
- 🌐 RESTful API for frontend and backend integration

---

## 🧰 Technologies Used

- **Node.js**, **Express.js**
- **MongoDB** + **Mongoose**
- **Stripe API** (or **SePay API**)
- **Pug** template engine
- **JWT** for authentication
- **Helmet**, **Rate Limiting**, **Mongo Sanitization**, **XSS Clean**
- **Parcel** for frontend JavaScript bundling

---

## 📦 Installation

```bash
git clone https://github.com/your-username/natours-booking.git
cd natours-booking
npm install
```

## ⚙️ Environment Configuration

NODE_ENV=development
PORT=3000
DATABASE=mongodb+srv://<USERNAME>:<PASSWORD>@cluster.mongodb.net/natours
DATABASE_PASSWORD=your_db_password
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
JWT_COOKIE_EXPIRES_IN=90

<!-- mailtrap -->

EMAIL_USERNAME=your_email
EMAIL_PASSWORD=your_password
EMAIL_HOST=your_host_sandbox_mailtrap
EMAIL_PORT=your_port

<!-- sendgrid -->

EMAIL_FROM=your_email
SENDGRID_USERNAME=your_key
SENDGRID_PASSWORD=your_password

<!-- Pay (Stripe) -->

STRIPE_SECRET_KEY=your_secret_key

## ▶️ Runing the app

npm run start

---

Would you like me to help you generate a GitHub repository structure (`.gitignore`, folders, etc.) or deploy instructions as well?
