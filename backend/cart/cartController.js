const Cart = require('./cart');

module.exports = {
    fetch: async (request, reply) => {
        try {
            const carts = await Cart.find({});
            reply.code(200).send(carts);
        } catch (err) {
            reply.code(500).send(err);
        }
    },

    get: async (request, reply) => {
        try {
            const id = request.params.id;
            const getCart = await Cart.findById(id);
            reply.code(200).send(getCart);
        } catch (err) {
            console.log(err);
        }
    },

    create: async (request, reply) => {
        try {
            // const id = request.params.id;
            const cartItem = request.body;
            cartItem.totalCost = 10
            const newCartItem = await Cart.create(cartItem);
            reply.code(200).send(newCartItem);
        } catch (err) {
            console.log(err);
        }
    },

    additem: async (request, reply) => {
        try {
            const id = request.params.id;
            const getCart = await Cart.findById(id);
            const params = request.body
            getCart.products.push(params);
            getCart.save()
            reply.code(200).send(getCart);
        } catch (err) {
            console.log(err);
        }
    },

    deleteitem: async (request, reply) => {
        try {
            const id = request.params.id;
            const getCart = await Cart.findById(id);
            const params = request.body
            getCart.products.remove(params);
            getCart.save()
            reply.code(200).send(getCart);
        } catch (err) {
            console.log(err);
        }
    },

    update: async (request, reply) => {
        try {
            const id = request.params.id;
            const params = request.body;
            const updateCart = await Cart.findByIdAndUpdate(id,params);
            reply.code(200).send('updated');
        } catch (err) {
            console.log(err);
        }
    },

    delete: async (request, reply) => {
        try {
            const id = request.params.id;
            await User.findByIdAndDelete(id);
            reply.code(200).send(`Deleted item ${id}`);
        } catch (err) {
            console.log(err);
        }
    }
}