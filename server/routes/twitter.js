const router = require('express').Router()

router.get('/', (req, res) => {
	const start = Date.now()
	for (let i = 0; i <= 1000000000; i++) {
		let dummy = Math.log(i + 1)
	}
	const timing = Date.now() - start
	res.status(200).json(timing)
})

module.exports = router
