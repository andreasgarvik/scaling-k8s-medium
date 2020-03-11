const app = require('express')()

app.get('/', (req, res) => {
	const start = Date.now()
	for (let i = 0; i <= 5000000000; i++) {
		Math.log(i + 1)
	}
	const time = Date.now() - start
	res.status(200).json(time)
})

const PORT = process.env.PORT || 8080
app.listen(PORT)
