const reqURL = require('node-fetch')

module.exports = {

    // all taxons
    fetch: async (request, reply) => {
        try {
            const response = await reqURL('https://demo.spreecommerce.org/api/v2/storefront/taxons', {
                method: 'GET'
            });       
            const data = await response.json();
            reply.code(200).send(data);
        } catch (err) {
            reply.code(500).send(err);
        }
    },

    // taxon by id
    get: async (request, reply) => {
        try {
            const id = request.params.id;
            const response = await reqURL(`https://demo.spreecommerce.org/api/v2/storefront/taxons/${id}`, {
                method: 'GET'
            });       
            const data = await response.json();
            reply.code(200).send(data);
        } catch (err) {
            console.log(err);
        }
    }
};
