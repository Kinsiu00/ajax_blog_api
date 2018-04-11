const express = require('express');
const router = express.Router();
const blogpostController = require('../controllers/blogposts');

router.get('/', blogpostController.readAll);
router.get('/:blogpost_id', blogpostController.readOne);
router.post('/', blogpostController.create);
router.put('/:blogpost_id', blogpostController.update);
router.delete('/:blogpost_id', blogpostController.destroy);

module.exports = router;
