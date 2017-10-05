import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import faker from 'faker'

const app = express()

app.use(bodyParser.json())



app.get('/api/listing', function(req, res) {
	res.json({
		locale: faker.lorem.words(),
		date: faker.date.future(),
		address: faker.address.streetAddress(),
		coords: [faker.address.latitude(), faker.address.longitude()]
	})
})


app.listen(8080, () => console.log('Running on localhost:8080'))
