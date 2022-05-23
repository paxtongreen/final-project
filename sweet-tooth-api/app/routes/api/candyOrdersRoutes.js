const express = require('express')
const router = express.Router()

const dao = require('../../../daos/api/candyOrdersDao')

router.get('/', (req, res)=> {
    dao.findAll(res, 'candy_orders')
})

router.get('/:id', (req, res)=> {
    dao.findById(res, 'candy_orders', req.params.id)
})

router.post('/create', (req, res)=> {
    dao.create(req, res)
})

router.patch('/update', (req, res)=> {
    dao.update(req, res)
})

module.exports = router