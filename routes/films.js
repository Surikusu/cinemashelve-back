var express = require('express');
var router = express.Router();

const Film = require('../models/films')


//get all
router.get('/', (req,res) => {
    Film.find().then(data => {
        res.json(data)
    })

})

//get by title
router.get('/:title', (req,res) => {
    Film.find({title :{$regex: new RegExp (`\\b${req.params.title}\\b`, "i")}}).then(data => {
        res.json(data)
    })
})

//get by duration approx
router.get('/minutes/:duration', (req,res) => {
    const minutes = parseInt(req.params.duration)

    const durationMin = minutes-10
    const durationMax = minutes+10
    
    Film.find({duration :{$gte: durationMin, $lte: durationMax}}).then(data => {
        res.json(data)
    })
})

module.exports = router;