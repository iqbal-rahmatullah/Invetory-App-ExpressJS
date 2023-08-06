const {inventory} = require('../models')

class InventoryController {
    static getInventory(req, res) {
        inventory.findAll().then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
    }

    static addInventory(req, res) {
        const {name, price, stock} = req.body
        inventory.create({
            name, price, stock
        }).then((result) => {
            res.json(result)
        }).catch((err) => {
            res.json(err)
        });
    }

    static deleteInventory(req, res) {
        const id = +req.params.id
        inventory.destroy({
            where: {
                id
            }
        }).then((result) => {
            if(result === 1) {
                res.json({
                    message: "Item has been deleted"
                })
            }else {
                res.json({
                    message: "Delete Failed!"
                })
            }
        }).catch((err) => {
            res.json(err)
        });
    }

    static updateInventory(req, res) {
        const id = +req.params.id
        const {name, price, stock} = req.body

        inventory.update({
            name, price, stock
        }, 
        {
            where: {
                id
            }
        }).then((result) => {
            if(result[0] === 1) {
                res.json({
                    message: "Item has been updated"
                })
            }else {
                res.jsong({
                    message: "Item failed update"
                })
            }
        }).catch((err) => {
            
        });
    }
}

module.exports = InventoryController