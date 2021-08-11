const mongoose = require('../connection')
const Schema = mongoose.Schema


const TalkingPointSchema = Schema({
    point: String
})

const SectionSchema = Schema({
    title: String,
    time: Number,
    talking_points: [{ type: Schema.Types.ObjectId, ref: 'TalkingPoint' }]
})

const PresentationSchema = Schema({
    name: String,
    sections: [{ type: Schema.Types.ObjectId, ref: 'Section' }]
})

const Presentation = mongoose.model('Presentation', PresentationSchema)
const Section = mongoose.model('Section', SectionSchema)
const TalkingPoint = mongoose.model('TalkingPoint', TalkingPointSchema)

module.exports= {
    Presentation,
    Section,
    TalkingPoint
}