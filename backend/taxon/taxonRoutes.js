const taxonController = require('./taxonController');

module.exports = (app) => {
 
    // all taxons
    app.get('/taxons', taxonController.fetch);

    // taxon by taxon id
    app.get('/taxons/:id', taxonController.get);
};

