var express = require('express'),
    cors = require('cors')
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var port = 3000;
app.get('/', function (req, res) {
});
app.post('/send-email', function (req, res) {
  let transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'xxx@xxx.xxx',
      pass: 'xxx'
    }
  });
  let mailOptions = {
    from: '"harnamsinghsandhu.ml"'+ req.body.email +'"',
    to: 'harnamsinghsandhu04@gmail.com',
    subject: 'New Message from ' + req.body.name,
    html: '<div style="border-radius: 25px;border: 2px solid #73AD21;padding: 20px;"><b>Name: '+req.body.name+'<br>Email: '+req.body.email+'<br>Subject: '+req.body.subject+'<br>Body: '+req.body.body+'</b></div>' // html body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.send({
        "status": "error"
      });
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
      res.send({
        "status": "sent"
      });
    });
  });
app.listen(port, function(){
  console.log('Server is running at port: ',port);
});
