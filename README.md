### Tasklist

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

Homepage
Product Listing Page
Product Detail Page
Checkout Page
Mock Payment Success/Failure Page
Requirements:

Use mock APIs to load product inventory.
Complete the flow from product selection to checkout and payment success/failure.
This should showcase an end-to-end transaction process using frontend and backend skills.
Prerequisites
Node.js (v14 or later)
npm (usually comes with Node.js)
Git
Folder Structure
rudy-shop/
│
├── public/
│   └── hero-image.jpg
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


Local Setup
Clone the repository:
git clone https://github.com/RudradevArya/Rudys-Shop.git
cd Rudys-Shop


Install dependencies:
npm install


Set up environment variables: Create a .env.local file in the root directory with the following content:
REACT_APP_API_URL=https://fakestoreapi.com


Run the development server:
npm start


Open http://localhost:3000 in your browser.
Features
Product listing with category filtering
Product details page
Shopping cart functionality
User authentication (mock)
Checkout process
Responsive design
API Documentation
This project uses the FakeStoreAPI for mock data. Here are the main endpoints used:

Products
Get all products: GET /products
Get a single product: GET /products/{id}
Get products in a specific category: GET /products/category/{categoryName}
Categories
Get all categories: GET /products/categories
Authentication
Login: POST /auth/login Body:
{
    "username": "johnd",
    "password": "m38rmF$"
  }
JS




For more details, visit FakeStoreAPI Documentation.

Task List
 Create skeleton frontend for fake-store-api
 Homepage (has 4 featured products)
 Product listings page
 Product details page
 Get cart working
 Dummy auth
 Dummy payment
 Payment cancelled/success page
 Better UI
 Responsive design
 Footer
 Logo
 Icons and fonts
Technologies Used
React
React Router
Context API for state management
CSS Modules for styling
FakeStoreAPI for mock data
Deployment
The application is deployed using [Deployment Platform, e.g., Vercel, Netlify]. You can view the live application at [Your Deployed URL].

To deploy your own version:

Fork this repository
Connect your forked repo to your preferred deployment platform
Set up the necessary environment variables
Deploy
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT

Acknowledgements
FakeStoreAPI for providing mock e-commerce data
React for the frontend framework
React Router for routing
CSS Modules for component-scoped styling
Made by Rudradev Arya as Zoroz Intern Assessment