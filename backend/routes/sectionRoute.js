const express = require('express')
const router = express.Router()

const sectionController = require('../controllers/section')

router.get('/', sectionController.getAll)
router.get('/:id', sectionController.getById)
router.post('/', sectionController.create)
router.put('/:id', sectionController.update)
router.delete('/:id', sectionController.remove)
router.put('/addpoint/:id', sectionController.addTalkingPoint)


module.exports = router;
