const userController = require('./userController');

module.exports = (app) => {
 
    app.get('/user', userController.fetch);

    app.post('/user', userController.create);
    
    app.put('/user/:id', userController.update);

    app.get('/user/:id', userController.get);

    app.delete('/user/:id', userController.delete);
};
