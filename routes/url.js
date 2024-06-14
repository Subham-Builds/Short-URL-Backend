const express = require('express');
const router = express.Router();
const {generateshorturl,count} = require('../controls/url')
router.post('/', generateshorturl)
router.get('/analytics/:short_id',count)
module.exports = router