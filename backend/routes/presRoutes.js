const express = require('express')
const router = express.Router()

const presController = require('../controllers/presentation')

router.get('/', presController.getAll)
router.get('/:id', presController.getById)
router.post('/', presController.create)
router.put('/:id', presController.update)
router.delete('/:id', presController.remove)

router.put('/addsection/:id', presController.addSection)


module.exports = router;
