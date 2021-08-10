const Presentation = require('../models/presentation')

const getAll = (req, res) => {
    Presentation.Presentation
        .find()
        .populate({ path: 'sections', populate: { path: 'talking_points' }})
        .then(prez => res.json(prez))
}

const getById = (req, res) => {
    Presentation.Presentation
        .findById(req.params.id)
        .populate({ path: 'sections', populate: { path: 'talking_points' }})
        .then(prez => res.json(prez))
}

const create = (req, res) => {
    Presentation.Presentation.create(req.body).then(prez => res.json(prez))
}
const update = (req, res) => {
    Presentation.Presentation.findByIdAndUpdate(req.params.id, req.body).then(prez => res.json(prez))
}

const remove = (req, res) => {
    Presentation.Presentation.remove({_id: req.params.id}).then(prez => res.json(prez))
}
const addSection = (req, res) => {
    Presentation.Presentation.findById(req.params.id).then(prez => Presentation.Section.create(req.body).then(sect =>{
        prez.sections.push(sect._id)
        prez.save()
        res.json(prez)
    }))

 


}

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove, 
    addSection
}