# `Hof Prototype`
### `frontend:`
* navigate to / and run `npm start` will start on http://localhost:8000
### `backend:`
* navigate to /backend and run `npm start` will start on http://localhost:3000

# `Endpoints`
### `external`
* GET http://localhost:3000/products > returns array of all products
* GET http://localhost:3000/products/id > returns single product by id
* GET http://localhost:3000/product/id (id of taxon) > returns all products within a taxon (product category) id

* GET http://localhost:3000/taxons > return array of all taxons
* GET http://localhost:3000/taxons/id > returns single taxon by id

### `our db at mongodb://127.0.0.1:27017/hof-prototype`
* GET http://localhost:3000/user > returns all users
* GET http://localhost:3000/user/id > returns single user by id
* POST http://localhost:3000/user > creates single user
* PUT http://localhost:3000/user/id > updates single user by id
* DELETE http://localhost:3000/user/id > deletes single user by id

Carts are distinguished by user.id - only 1 cart per user for prototype
* GET http://localhost:3000/carts > returns all carts
* GET http://localhost:3000/cart/id > returns single cart by user.id
* POST http://localhost:3000/cart > creates single cart using user.id
* PUT http://localhost:3000/cart/id > adds single item to cart by user.id with product details in body
* POST http://localhost:3000/cart/id > updates item in cart (not done)
* DELETE http://localhost:3000/deletecart/id > deletes entire cart by cart._id

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
