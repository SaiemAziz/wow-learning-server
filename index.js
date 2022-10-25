const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000
app.use(cors())

const subjects = require('./Subjects/subjects.json')



app.get('/courses', (req, res) => {
    res.send(subjects)
})
app.get('/courses/all', (req, res) => {
    res.send(subjects)
})
app.get('/courses/:category', (req, res)=>{
    let category = req.params.category;
    let catSubjects = subjects.filter(sub => sub.category === category)
    res.send(catSubjects)
})
app.get('/courses/:id', (req, res)=>{
    let id = req.params.id;
    let subject = subjects.find(sub => sub._id === id)
    res.send(subject)
})
  
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})