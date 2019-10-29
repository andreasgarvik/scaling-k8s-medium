const app = require('express')()

app.get('/', (req, res) => {
	const start = Date.now()
	for (let i = 0; i <= 1000000000; i++) {
		let dummy = Math.log(i + 1)
	}
	const time = Date.now() - start
	res.status(200).json(time)
})

app.listen(8080)
