const productController = require('./productController');

module.exports = (app) => {
 
    // all products
    app.get('/products', productController.fetch);

    // one product by product ID
    app.get('/products/:id', productController.get);

    // products by taxon id
    app.get('/product/:id', productController.getfilter);

};

