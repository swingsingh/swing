const express = require('express')

const router = express.Router()
const auth = require('./../controller/auth.controller')

router.route('/open-account').post(auth.openAccount)
router.route('/live-event').post(auth.liveEventRegisteration)
router.route('/adding-doubt').post(auth.addingDoubts)
router.route('/result').get(auth.resultsSending)



module.exports = router