const fs = require('fs')

const loadRoutes = app => {
    fs.readdirSync(__dirname)
        .forEach(file => {
            if(file !== 'index.js') {
                const route = require(`./${file}`)
                const routeName = file.split('.')[0]
                app.use(`/api/${routeName}`, route)
            }
        })
}

module.exports = loadRoutes