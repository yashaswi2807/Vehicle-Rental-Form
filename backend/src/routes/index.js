const express = require('express');
const router = express.Router();
const { getVehicleTypes, getVehicles, bookVehicle } = require('../controllers');

router.get('/vehicle-types', getVehicleTypes);
router.get('/vehicles', getVehicles);
router.post('/bookings', bookVehicle);

module.exports = router;
