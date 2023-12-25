const express = require('express')
const router = express.Router()

//GET all workouts
router.get('/', (request, res) => {
    res.json({mssg: "GET all workouts"})
})

//GET signle workouts
router.get('/:id', (request, res) => {
    res.json({mssg: "GET single workout"})
})

//POST new workouts
router.post('/', (request, res) => {
    res.json({mssg: "POST a new workout"})
})

//DELETE a  workouts
router.delete('/:id', (request, res) => {
    res.json({mssg: "DELETE a workout"})
})

//UPDATE a  workouts
router.patch('/:id', (request, res) => {
    res.json({mssg: "UPDATE a workout"})
})

module.exports = router