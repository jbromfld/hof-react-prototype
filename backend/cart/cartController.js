const Cart = require('./cart');

module.exports = {
    // all carts
    fetch: async (request, reply) => {
        try {
            const carts = await Cart.find({});
            reply.code(200).send(carts);
        } catch (err) {
            reply.code(500).send(err);
        }
    },

    // create cart and add one item
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

    // cart by cart.userId
    get: async (request, reply) => {
        try {
            const userId = request.params.userid;
            const cartId = request.params.id;
            const getCart = await Cart.findOne({ userId: userId });            
            reply.code(200).send(getCart);
        } catch (err) {
            console.log(err);
        }
    },

    // add item to cart identified by cart.userId
    additem: async (request, reply) => {
        try {
            const userId = request.params.userid;
            const getCart = await Cart.findOne({ userId: userId });
            const params = request.body
            getCart.products.push(params);
            getCart.save()
            reply.code(200).send(getCart);
        } catch (err) {
            console.log(err);
        }
    },

    // delete single item from cart using cart.userId with the cart.products._id as query param
    deleteitem: async (request, reply) => {
        try {
            const userId = request.params.userid;
            const getCart = await Cart.findOne({ userId: userId });
            const params = request.body
            getCart.products.id(params._id).remove()            
            // const product_id = getCart.products.filter(function (products) {
            //     return products.productId === params.productId;
            // })
            getCart.save()
            reply.code(200).send(getCart);
        } catch (err) {
            console.log(err);
        }
    },

    // update item in cart ----------- not complete -------------------
    update: async (request, reply) => {
        try {
            const userId = request.params.userid;
            const getCart = await Cart.findOne({ userId: userId });
            const params = request.body
            const updateCart = await Cart.findByIdAndUpdate(id,params);
            reply.code(200).send('updated');
        } catch (err) {
            console.log(err);
        }
    },

    // delete entire cart by cart._id
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