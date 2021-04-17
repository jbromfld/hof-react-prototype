const reqURL = require('node-fetch')

module.exports = {

    // all products
    fetch: async (request, reply) => {
        try {
            const response = await reqURL('https://demo.spreecommerce.org/api/v2/storefront/products', {
                method: 'GET'
            });       
            const data = await response.json();
            reply.code(200).send(data);
        } catch (err) {
            reply.code(500).send(err);
        }
    },

    // product by product id
    get: async (request, reply) => {
        try {
            const id = request.params.id;
            const response = await reqURL(`https://demo.spreecommerce.org/api/v2/storefront/products/${id}`, {
                method: 'GET'
            });       
            const data = await response.json();
            reply.code(200).send(data);
        } catch (err) {
            console.log(err);
        }
    },

    // products by taxon id
    getfilter: async (request, reply) => {
        try {
            const id = request.params.id;
            const param = request.body
            const response = await reqURL(`https://demo.spreecommerce.org/api/v2/storefront/products?filter%5Btaxons%5D=${id}`, {
                method: 'GET'
            });       
            const data = await response.json();
            reply.code(200).send(data);
        } catch (err) {
            console.log(err);
        }
    }
};