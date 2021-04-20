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
    },

    // products by price ------------------------not complete --------------------------
    getpricefilter: async (request, reply) => {
        try {
            var id = request.params.id;
            if (id == 100) {
                var id_low = 0
                var id_high = 20
            } else if (id == 200) {
                var id_low = 21
                var id_high = 50
            } else if (id == 300) {
                var id_low = 51
                var id_high = 75
            } else if (id == 400) {
                var id_low = 76
                var id_high = 300  
            }
            const response = await reqURL(`https://demo.spreecommerce.org/api/v2/storefront/products?filter%5Bprice%5D=${id_low}%2C${id_high}`, {
                    method: 'GET'
            });
            const data = await response.json();
            reply.code(200).send(data);
        } catch (err) {
            console.log(err);
        }
    }
};
