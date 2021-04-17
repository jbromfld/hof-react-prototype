const User = require('./user');

module.exports = {

    // list of users
    fetch: async (request, reply) => {
        try {
            const users = await User.find({});
            reply.code(200).send(users);
        } catch (err) {
            reply.code(500).send(err);
        }
    },

    // find by user.id
    get: async (request, reply) => {
        try {
            const id = request.params.id;
            const getUser = await User.findOne({ id: id });
            reply.code(200).send(getUser);
        } catch (err) {
            console.log(err);
        }
    },

    // create user
    create: async (request, reply) => {
        try {
            const user = request.body;
            const newUser = await User.create(user);
            reply.code(200).send(newUser);
        } catch (err) {
            console.log(err);
        }
    },

    // update user by user.id
    update: async (request, reply) => {
        try {
            const id = request.params.id;
            const params = request.body;
            const userdoc = await User.findOne( { id: id })
            const _id = userdoc._id
            await User.findByIdAndUpdate(_id,params);
            reply.code(200).send(`User ${userdoc.name} has been updated`)
        } catch (err) {
            console.log(err);
        }
    },

    // delete user by user.id
    delete: async (request, reply) => {
        try {
            const id = request.params.id;
            const userdoc = await User.findOne( { id: id })
            const _id = userdoc._id
            await User.findByIdAndDelete(_id);
            reply.code(200).send(`Deleted user ${id}`);
        } catch (err) {
            console.log(err);
        }
    }
}