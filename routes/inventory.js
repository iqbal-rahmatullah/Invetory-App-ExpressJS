const InventoryRoutes = require('express').Router()
const InventoryController = require('../controller/InventoryController')

InventoryRoutes.get('/', InventoryController.getInventory)
InventoryRoutes.post('/', InventoryController.addInventory)
InventoryRoutes.delete('/delete/:id', InventoryController.deleteInventory)
InventoryRoutes.put('/update/:id', InventoryController.updateInventory)

module.exports = InventoryRoutes