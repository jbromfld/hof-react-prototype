const cartController = require('./cartController');

module.exports = (app) => {
 
    app.get('/carts', cartController.fetch);

    app.get('/cart/:id', cartController.get);

    app.post('/cart/:id', cartController.create);

    app.put('/cart/:id', cartController.additem);

    app.delete('/cart/:id', cartController.deleteitem);
    
    app.put('/cartItem/:id', cartController.update);

    app.delete('/cartItem/:id', cartController.delete);
};