const app = require('express').Router()
const InventoryRoutes = require('./inventory')

app.use('/', InventoryRoutes)

module.exports = app