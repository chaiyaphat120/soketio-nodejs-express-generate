var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  // res.json({user:"565656"});
  req.io.emit('booking_request', {"user_Id": req.user_id , "socket_id" :  req.socket_id});
  res.json({"user_Id": req.user_id , "socket_id" :  req.socket_id})
});

module.exports = router;
