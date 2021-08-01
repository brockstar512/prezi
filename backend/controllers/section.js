const Section = require('../models/presentation')

const getAll = (req, res) => {
    Section.Section.find().then(sections => res.json(sections))
}

const getById = (req, res) => {
    Section.Section.findById(req.params.id).then(section => res.json(section))
}

const create = (req, res) => {
    Section.Section.create(req.body).then(section => res.json(section))
}
const update = (req, res) => {
    Section.Section.findByIdAndUpdate(req.params.id, req.body).then(section => res.json(section))
}

const remove = (req, res) => {
    Section.Section.remove({_id: req.params.id}).then(section => res.json(section))
}

const addTalkingPoint = (req, res) => {
    Section.Section.findById(req.params.id).then(sect => Section.TalkingPoint.create(req.body).then(point=>{
        sect.talking_points.push(point)
        sect.save()
        res.json(sect)
        
    }))

}








// const addSection = (req, res) => {
//     Presentation.Presentation.findById(req.params.id).then(prez => Presentation.Section.create(req.body).then(sect =>{
//         prez.sections.push(sect)
//         prez.save()
//         res.json(prez)
//     }))
// }


module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
    addTalkingPoint
}