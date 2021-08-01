const Talkingpoints = require('../models/presentation')


const getAll = (req, res) => {
    Talkingpoints.TalkingPoint.find({}).then(talkingpoints=>{
        res.json(talkingpoints)
    })
}

const getById = (req, res) => {
    Talkingpoints.TalkingPoint.findById(req.params.id).then(talkingpoints => res.json(talkingpoints))
}

const create = (req, res) => {
    Talkingpoints.TalkingPoint.create(req.body).then(talkingpoints =>res.json(talkingpoints))
}

const update = (req, res) => {
    Talkingpoints.TalkingPoint.findByIdAndUpdate(req.params.id, req.body).then(talkingpoints => res.json(talkingpoints))
}

const remove = (req, res) => {
    Talkingpoints.TalkingPoint.remove({_id: req.params.id}).then(talkingpoints=> res.json(talkingpoints))
}

module.exports ={
    getAll,
    getById,
    create,
    update,
    remove,
}