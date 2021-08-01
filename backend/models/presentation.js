const mongoose = require('../connection')
const Schema = mongoose.Schema


const TalkingPointSchema = new Schema ({
    "point": String
})

const SectionSchema = new Schema({
    "title": String,
    "time": Number,
    "talking_points": [TalkingPointSchema]
})

const PresentationSchema = new Schema({
    "name": String,
    "sections": [SectionSchema]
})

const Presentation = mongoose.model('User', PresentationSchema)
const Section = mongoose.model('Section', SectionSchema)
const TalkingPoint = mongoose.model('Talkingpoint', TalkingPointSchema)
module.exports= {
    Presentation,
    Section,
    TalkingPoint
}