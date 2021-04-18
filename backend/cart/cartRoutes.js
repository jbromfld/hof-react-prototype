const cartController = require('./cartController');

module.exports = (app) => {
    // all carts
    app.get('/carts', cartController.fetch);

    // create cart and add one item (empty cart is not a document in database)
    app.post('/cart', cartController.create);

    // cart by cart.userId
    app.get('/cart/:userid', cartController.get);

    // add item to cart
    app.put('/cart/:userid', cartController.additem);

    // delete item from cart
    app.delete('/cart/:userid', cartController.deleteitem);

    // update item in cart
    app.post('/cart/:userid', cartController.update);

    // delete entire cart
    app.delete('/deletecart/:id', cartController.delete);
};
