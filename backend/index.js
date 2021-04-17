const fastify = require('fastify')( { logger: true })

// database routes
const mongoose = require('mongoose')
const userRoutes = require('./user/userRoutes')
const cartRoutes = require('./cart/cartRoutes')

// external routes
const taxonRoutes = require('./taxon/taxonRoutes')
const productRoutes = require('./product/productRoutes')

// database connection
mongoose.connect('mongodb://127.0.0.1:27017/hof-prototype', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => {
    console.log('DB connected')
}).catch(err => {
    console.log('DB not connected')
})

userRoutes(fastify)
cartRoutes(fastify)
taxonRoutes(fastify)
productRoutes(fastify)

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        console.log(err)
        fastify.log.error(err)
    }
}

start()
