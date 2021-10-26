const express = require('express');
const PhonesController = require('./app/controllers/PhonesController');

const router = express();

router.get('/phones', PhonesController.index);
router.get('/phones/:code', PhonesController.show);
router.post('/phones', PhonesController.store);
router.put('/phones/:code', PhonesController.update);
router.delete('/phones/:code', PhonesController.delete);

module.exports = router;
