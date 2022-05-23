const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3001

router.use(express.static('public'))

// API
// All ROUTES
router.get('/api', (req, res)=> {
    res.json({
        'Candy': `http://localhost:${PORT}/api/candy`,
        'Shipping': `http://localhost:${PORT}/api/shipping`,
        'Payment': `http://localhost:${PORT}/api/payment`,
        'Email': `http://localhost:${PORT}/api/email`,
        'Candy Orders': `http://localhost:${PORT}/api/candy_orders`

    })
})

router.use('/api/candy', require('./api/candyRoutes'))
router.use('/api/shipping', require('./api/shippingRoutes'))
router.use('/api/payment', require('./api/paymentRoutes'))
router.use('/api/email', require('./api/emailRoutes'))
router.use('/api/candy_orders', require('./api/candyOrdersRoutes'))


router.get('*', (req, res)=> {
    if(req.url == '/favicon.ico/') {
        res.end()
    } else {
        res.send('<h1>404 Error This page does not exist!</h1>')
    }
})

module.exports = router