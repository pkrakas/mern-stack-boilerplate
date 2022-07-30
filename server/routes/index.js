const fs = require('fs')

const loadRoutes = app => {
    fs.readdirSync(__dirname)
        .forEach(file => {
            if(file !== 'index.js') {
                const route = require(`./${file}`)
                app.use('/api', route)
            }
        })
}

module.exports = loadRoutes