const Sequelize = require('sequelize')
const pkg = require('../../package.json')


const databaseName = pkg.name + (process.env.NODE_ENV === 'development' ? '-test' : '')

const db = new Sequelize(
    process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`,
    {
        logging: false
    }
)
module.exports = db