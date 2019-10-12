const router = require('express').Router()

router.get('/', (req, res) => {
	res.send('Twitter...')
})

module.exports = router
