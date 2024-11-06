## Tasklist

* [x] Create skeleton frontend for fake-store-api
* [x] homepage (has 4 featured prodsucts)
* [x] dummy listings pagge
* [x] dummy details page
* [x] get cart working
* [x] dummy checkout
* [x] dummy auth
* [x] dummy payment
* [x] dummy payment cancelled/success page (70-80% success randomised rate)
* [ ] better ui (LOL)
* [x] responsive
* [x] footer
* [ ] logo?
* [ ] icons and fonts
* [ ] Saturn
* [ ] Uranus

# Zoroz Intern Assignment

## Problem Statement

Develop a mock eCommerce website similar to Amazon, including:

Requirements:

* Homepage
-Product Listing Page
* Product Detail Page
* Checkout Page
* Mock Payment Success/Failure Page

Requirements:

* Use mock APIs to load product inventory.
* Complete the flow from product selection to checkout and payment success/failure.
* This should showcase an end-to-end transaction process using frontend and backend skills.

## Prerequisites

* Node.js (v14 or later)
* npm
* Git

## Folder Structure

``` rudy-shop/
│
├── public/
│   └── hero.jpg
│
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Footer.js
│   │   └── LoadingSpinner.js
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── CartContext.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── ProductListPage.js
│   │   ├── ProductDetailPage.js
│   │   ├── CartPage.js
│   │   ├── CheckoutPage.js
│   │   ├── PaymentResultPage.js
│   │   └── LoginPage.js
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css
│   │   ├── Header.module.css
│   │   ├── Footer.module.css
│   │   ├── HomePage.module.css
│   │   ├── ProductListPage.module.css
│   │   ├── ProductDetailPage.module.css
│   │   ├── CartPage.module.css
│   │   ├── CheckoutPage.module.css
│   │   ├── PaymentResultPage.module.css
│   │   └── LoginPage.module.css
│   ├── utils/
│   │   └── api.js
│   └── App.js
│
├── .env.local
├── package.json
└── README.md
```

## Local Setup

1. Clone the repository:
```git clone https://github.com/RudradevArya/Zoroz-OA.git```
```cd Zoroz-OA```
2. Install dependencies:
```npm install```
3. Set up environment variables: Create a .env.local file in the root directory with the following content:
```REACT_APP_API_URL=https://fakestoreapi.com```
4. Run the development server:
```npm start```
5. Open ```http://localhost:3000``` in your browser.

## API Documentation

This project uses the FakeStoreAPI for mock data. Here are the main endpoints used:

1. Products

* Get all products: ```GET /products```
* Get a single product: ```GET /products/{id}```
* Get products in a specific category: ```GET /products/category/{categoryName}```
* Categories
Get all categories: ```GET /products/categories```

2. Authentication
```
Login: 
POST /auth/login Body: 
    { 
        "username": "johnd", 
        "password": "m38rmF$"
    }

For more details, visit FakeStoreAPI Documentation.

## Outputs

![Animated gif demo](demo/demo.gif)