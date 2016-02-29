/**
 * Created by romab on 15.02.2016.
 */
var express = require('express');
var router = express.Router();
var Handler = require('../handlers/user');
var handler = new Handler();

router.get('/', handler.getAll);
router.get('/:id', handler.getById);
router.post('/', handler.create);

router.put('/:id', handler.update);
router.delete('/:id', handler.remove);

module.exports = router;