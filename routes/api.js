var express = require('express');
var router = express.Router();
var utils = require('../utils')

router.post('/:action', function(req, res, next) {
	var action = req.params.action

	if(action == 'send'){
		var recipients = req.body.recipients
		var list = recipients.split(',')

		utils.Email.sendEmails(list, req.body, function(){
			res.json({
				confirmation: 'success',
				message: 'Emails Sent!'
			})
		})
	
		return 
	}

	res.json({
  	confirmation: 'fail',
  	message: 'Invalid Action'
  })
})

module.exports = router;
