const User = require('./user');

module.exports = {
    fetch: async (request, reply) => {
        try {
            const users = await User.find({});
            reply.code(200).send(users);
        } catch (err) {
            reply.code(500).send(err);
        }
    },

    get: async (request, reply) => {
        try {
            const id = request.params.id;
            const getUser = await User.findById(id);
            reply.code(200).send(getUser);
        } catch (err) {
            console.log(err);
        }
    },

    create: async (request, reply) => {
        try {
            const user = request.body;
            const newUser = await User.create(user);
            reply.code(200).send(newUser);
        } catch (err) {
            console.log(err);
        }
    },

    update: async (request, reply) => {
        try {
            const id = request.params.id;
            const params = request.body;
            const updateUser = await User.findByIdAndUpdate(id,params);
            reply.code(200).send('updated');
        } catch (err) {
            console.log(err);
        }
    },

    delete: async (request, reply) => {
        try {
            const id = request.params.id;
            await User.findByIdAndDelete(id);
            reply.code(200).send(`Deleted user ${id}`);
        } catch (err) {
            console.log(err);
        }
    }
}