var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Contact'
  });
});

// Send email
router.post('/send', function(req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'dc69@student.london.ac.uk',
      pass: ''
<<<<<<< HEAD
=======
=======
      pass: ''
>>>>>>> dff54315a353a74ea5d773704f609d41f1050e31
>>>>>>> ee5624d2d46dcb2743800920a2aae2ef733785e0
    }
  });

  var mailOptions = {
    from: '"Derrick Cassidy" <dc69@student.london.ac.uk>',
    to: 'londonlaw2015@icloud.com',
    subject: 'Hello from PC Repair',
    text: `You have a submission from... Name: ${req.body.name} Email: ${req.body.email} Message: ${req.body.message}`,
    html: `'<p>You have a submission from...</p><ul><li> Name: ${req.body.name}</li><li> Email: ${req.body.email}</li><li> Message: ${req.body.message}</li></ul>`
  }

  transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
      return console.log(error);
    }
    console.log('Message sent: '+ info.response);
    res.redirect('/');
  });

});

module.exports = router;
