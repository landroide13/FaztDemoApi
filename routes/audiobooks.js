const express = require('express');
const router = express.Router();
const { createAudiobook, getAudiobook, getAudiobooks, deleteAudiobook, updateAudiobook} = require('../controllers/audiobooks.controller');

router.get('/', getAudiobooks);
router.get('/:id', getAudiobook);
router.post('/', createAudiobook);
router.delete('/:id', deleteAudiobook);
router.put('/:id', updateAudiobook);

module.exports = router;
