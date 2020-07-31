const express = require('express')

const app = express()
const port = 3334

//Controllers

const movieCtrl = require('./controllers/MovieControllers')

app.use(express.json())

//EndPoints
app.get('/api/movies', movieCtrl.getMovies)
// app.post()
// app.put()
// app.delete()

app.listen(port, () => console.log(`Server listening on port ${port}`))
