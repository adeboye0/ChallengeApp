const express = require('express');
const router = express.Router();
const Controller = require('./route-config').Controller;

router.route('/data').get(Controller.Home.index);

router.route('/add').post(Controller.Home.add);

router.route('/data/:tnx_id').get(Controller.Home.single);


module.exports = router;