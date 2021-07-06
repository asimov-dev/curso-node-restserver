const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT

        this.middlewares();
        this.routes();
    }

    middlewares() {

        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use('/api/user', require('../routes/user'))
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', this.port)
        })
    }

}

module.exports = Server;