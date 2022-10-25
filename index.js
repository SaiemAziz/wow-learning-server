const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.use(cors())

const subjects = require('./Subjects/subjects.json')



app.get('/', (req, res) => {
    res.send(subjects)
})
  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})