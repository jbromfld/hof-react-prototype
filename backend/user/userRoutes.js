const userController = require('./userController');

module.exports = (app) => {
 
    // all users
    app.get('/user', userController.fetch);

    // find by user.id
    app.get('/user/:id', userController.get);

    // create user
    app.post('/user', userController.create);

    // update by user.id
    app.put('/user/:id', userController.update);

    // delete by user.id
    app.delete('/user/:id', userController.delete);
};
