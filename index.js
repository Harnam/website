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
      user: 'xxx@xxx',
      pass: 'xxx'
    }
  });
  let mailOptions = {
    from: '"harnamsinghsandhu.ml"'+ req.body.email +'"',
    to: ['harnamsinghsandhu04@gmail.com', req.body.email],
    subject: req.body.name + ', Thank you for contacting me!',
    html: '<html><head><style>:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;}*,::after,::before{box-sizing:border-box;}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent;}nav{display:block;}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff;}h2{margin-top:0;margin-bottom:.5rem;}p{margin-top:0;margin-bottom:1rem;}ul{margin-top:0;margin-bottom:1rem;}b{font-weight:bolder;}a{color:#007bff;text-decoration:none;background-color:transparent;}a:hover{color:#0056b3;text-decoration:underline;}img{vertical-align:middle;border-style:none;}h2{margin-bottom:.5rem;font-weight:500;line-height:1.2;}h2{font-size:2rem;}.container-fluid{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;}.nav-link{display:block;padding:.5rem 1rem;}.nav-link:focus,.nav-link:hover{text-decoration:none;}.navbar{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem;}.navbar-nav{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none;}.navbar-nav .nav-link{padding-right:0;padding-left:0;}@media (min-width:576px){.navbar-expand-sm{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start;}.navbar-expand-sm .navbar-nav{-ms-flex-direction:row;flex-direction:row;}.navbar-expand-sm .navbar-nav .nav-link{padding-right:.5rem;padding-left:.5rem;}}.navbar-dark .navbar-nav .nav-link{color:rgba(255,255,255,.5);}.navbar-dark .navbar-nav .nav-link:focus,.navbar-dark .navbar-nav .nav-link:hover{color:rgba(255,255,255,.75);}.jumbotron{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem;}@media (min-width:576px){.jumbotron{padding:4rem 2rem;}}.bg-dark{background-color:#343a40!important;}.justify-content-center{-ms-flex-pack:center!important;justify-content:center!important;}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important;}a:not(.btn){text-decoration:underline;}img{page-break-inside:avoid;}h2,p{orphans:3;widows:3;}h2{page-break-after:avoid;}body{min-width:992px!important;}.navbar{display:none;}}svg{fill:red;}</style><body style="background: #c6c6c6"><nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center"><ul class="navbar-nav"><li class="nav-item "><a class="nav-link" href="#"><svg height="40px" width="170px" "http://www.w3.org/2000/svg" width="909pt" height="215pt" version="1.0" viewBox="0 0 909 215"><g transform="translate(0 215) scale(.1 -.1)"><path d="m100 1085v-965l23 4c12 3 78 12 147 21s128 20 133 24c4 4 6 190 5 414l-3 406 30 5c17 3 89 8 160 12l130 6-3-398c-1-218 1-401 5-404 5-4 76 0 158 9l150 16 3 908 2 907h-160-160l-2-372-3-373-10 750-3-371-2-371-92-7c-50-3-111-6-134-6h-44l-3 378-2 377-3-384-2-384 158 5c104 4 134 3 87-2-38-5-112-10-163-12l-92-3v388 387h-155-155v-965z"/><path d="m1052 1149c-1-711-5-909-14-916-15-11-307-45-320-37-4 3-8 185-8 406v400l-117-7c-65-3-130-8-145-11l-28-6v-409c0-319-3-411-12-414-7-3-78-14-157-25-126-17-185-30-140-30 47 0 293 41 305 51 12 9 14 79 14 415v403l53 5c28 3 89 8 135 11l82 6v-393c0-216 4-399 9-407 7-11 35-10 167 4 88 10 165 23 172 29 9 9 12 202 9 921l-2 910-3-906z"/><path d="m1427 2025c-19-87-229-1349-267-1595-11-74-22-144-25-155-10-46 2-49 159-35 81 7 154 19 163 25 10 8 21 51 34 136 10 68 21 138 24 155l5 32 98 6c53 4 120 9 148 12l50 6 24-152c17-110 27-153 38-158 27-10 325 17 339 31 16 16 19-3-203 1252-81 458-83 469-89 463-3-2 51-321 119-709 68-387 135-769 149-849s22-148 19-152c-11-11-322-32-331-22-5 5-18 76-31 158l-23 149-81-7c-44-3-121-8-171-10-78-4-82-4-30 4 33 4 112 11 176 15l116 7 22-138c12-77 21-147 21-157 0-18 7-18 103-12 56 4 129 10 162 14 57 6 60 7 57 31-8 54-195 1122-242 1380-28 151-51 281-52 288-2 16-458 18-458 2 0-6-38-235-84-508-120-709-210-1271-204-1277 5-5 278 21 284 28 2 2 14 68 26 148 12 79 25 149 30 154 6 6 7 0 4-15-3-14-15-83-26-154-10-71-24-134-29-139-15-15-282-40-295-27-11 11 54 437 200 1288 46 273 83 500 81 506s-7-2-10-19zm292-811 48-299-26-6c-14-4-59-7-100-8l-74-1 6 43c4 23 23 143 42 267 20 124 39 247 42 275 4 27 8 45 10 39s25-146 52-310z"/><path d="m2293 1205c-2-477 1-856 6-864 12-19 329 0 342 20 5 8 9 164 9 347v332l58-1c80 0 122-17 146-59 19-31 21-58 26-300 6-264 12-308 43-311 30-3 218 2 274 7 70 7 82 21 61 70-7 19-14 123-18 294-8 310-16 345-101 433l-49 50 39 36c78 72 110 180 111 366 0 170-35 281-112 350-80 73-82 73-468 75l-345 1-3-852-2-851 92 6c51 4 123 9 160 12l68 6 3 334 2 334v-337-338l-46-6c-25-4-99-8-165-10l-119-4-10 1710-2-850zm536 587c62-31 71-62 68-231-2-134-4-153-23-178-11-15-32-34-46-41-26-12-181-37-195-30-4 1-6 111-3 243l6 240 4-474 33 4c17 2 53 7 80 9 64 7 102 29 117 67 16 38 17 300 1 341-15 40-46 52-156 59l-100 6 90 1c68 2 98-2 124-16zm-27-13c62-17 70-44 66-220-3-143-4-150-28-174-25-24-98-45-161-45h-29v225 225h58c31 0 74-5 94-11zm354-649c60-82 66-117 73-410 5-190 10-272 20-289 8-14 9-27 3-33-5-5-83-10-173-11l-163-2-12 40c-8 26-13 119-13 260-2 235-9 295-44 335l-22 25 23-19c46-39 50-61 51-302 1-124 6-249 12-277 5-27 9-52 9-55 0-5 321 6 326 11 2 2-3 21-11 42-10 29-14 92-15 225-1 356-20 427-145 526-14 11-10 10 14-3 19-10 49-38 67-63z"/><path d="m3362 1229c-1-590 1-828 9-836 14-14 288-5 307 10 9 7 12 120 13 496l1 486 34-105c19-58 84-274 146-480 61-206 116-381 121-387 13-18 338-18 355-1 9 9 11 204 10 827l-3 816-2-809c-2-586-6-813-14-823-9-11-46-13-173-11l-161 3-27 85c-15 47-76 249-137 450-60 201-121 399-134 440l-25 75-1-520c-1-286-5-525-9-532-9-14-278-21-292-7-6 6-11 329-13 829l-2 820-3-826z"/><path d="m3380 1232c0-450 2-821 4-823s67-2 143 1l138 5v574 573l23-73c26-84 273-898 304-1001l20-68h151c84 0 157 4 162 8 7 4 10 288 10 815v807h-143-143l3-456c3-453 3-455-15-397-10 32-73 236-140 453l-123 395-197 3-197 2v-818z"/><path d="m3790 2042c0-11 214-710 240-782 5-15 8 135 7 385l-2 410-5-369-5-370-109 355c-105 340-125 400-126 371z"/><path d="m4712 2e3c-23-110-162-863-222-1195-33-187-62-348-64-358-9-40 18-47 168-47 124 0 145 2 158 18 8 9 22 69 32 132 9 63 19 123 22 133 5 15 21 17 153 17h148l18-112c9-62 21-129 26-149l9-36 92-7c150-10 244-8 257 7 13 17-23 229-215 1262-67 360-73 389-80 382-2-2 25-160 61-351s97-524 135-739c39-216 77-426 85-467 7-41 10-79 5-84-4-4-81-4-171 0l-163 9-17 100c-9 55-19 121-23 147l-7 48-344 6 352 4 24-147 24-148 150-8c82-4 154-6 160-3 8 3-3 87-37 278-42 237-226 1235-244 1326l-6 32h-227-227l-73-392c-136-730-221-1203-219-1216 2-10 35-13 143-13 125 0 140 2 146 18 3 10 14 71 24 135 10 65 22 118 25 118 11 0-36-258-50-274-18-23-271-23-290-1-14 17 15 189 191 1129 49 264 88 484 86 490s-9-14-15-44zm287-680c23-135 46-267 50-294l9-49-96 6c-52 4-97 8-99 11-2 2 18 132 44 289s48 285 49 284 20-112 43-247z"/><path d="m5583 1235c-2-495 1-826 7-835 13-21 288-29 301-9 5 8 9 199 10 424l1 410 23-125c13-69 42-228 64-355 62-348 62-351 70-363 11-18 312-35 328-19 6 7 28 111 47 232 20 121 49 297 65 390l29 170 1-396c1-304 4-399 14-407 18-15 309-33 324-20 10 8 13 185 11 867l-3 856-2-851c-3-665-6-854-16-861-15-12-287 5-304 19-10 8-13 119-15 472l-3 461-73-455c-41-250-79-460-85-466-13-12-296 0-307 14-4 4-40 194-80 422-41 228-78 442-84 475-9 48-12-34-16-415l-5-475-75-3c-41-1-106 1-145 5l-70 8-10 1650-2-820z"/><path d="m5600 1231v-818l76-7c43-3 106-6 141-6h64l-3 549c-2 302-1 548 2 546s7-18 8-37c2-18 34-206 72-418s80-443 92-515l23-130 60-7c33-3 100-7 150-9l90-2 27 164c14 90 52 319 82 509 31 190 60 363 64 385s7-210 7-515v-555l85-7c47-3 113-8 148-9l62-4 3 853 2 852h-216-216l-32-187c-18-104-60-353-94-555l-62-367-29 162c-48 275-165 909-171 928-6 18-21 19-220 19h-215v-819z"/><path d="m6096 1768c29-156 72-392 96-524l43-242 87 517c48 284 86 521 84 526-6 16-12-17-91-490-41-247-76-456-78-464-1-7-28 132-61 310-87 485-119 649-126 649-3 0 18-127 46-282z"/><path d="m7513 1175c-2-499 1-886 6-894 10-16 306-49 335-38 15 6 16 82 14 909l-3 903-2-895c-2-494-7-898-12-903-9-9-272 11-308 24l-23 8-3 883-2 883-2-880z"/><path d="m7532 1170c-2-484-1-880 0-880 2 0 66-7 143-15s148-15 158-15c16 0 17 49 17 895v895h-158-158l-2-880z"/><path d="m8022 1143c-1-721 1-913 11-920 22-14 291-41 305-30 9 7 12 132 13 561l1 551 34-125c19-69 86-327 149-574 62-247 117-452 122-456 8-8 293-51 323-49 34 2-44 17-173 34-76 10-140 21-142 26-3 4-41 149-84 321s-114 447-157 611l-79 298-3-588c-1-347-6-591-12-597-10-10-255 11-282 26-17 8-18 65-21 916l-2 907-3-912z"/><path d="m8040 1146v-905l32-5c52-9 211-26 236-26h23l-3 645c-2 355-1 640 0 635 14-40 178-669 253-966l91-361 142-17c77-10 149-20 159-22 16-5 17 45 17 960v966h-140-141l3-525c2-289 0-518-3-508-4 10-50 185-104 388-53 204-113 431-133 505l-38 135-197 3-197 2v-904z"/><path d="m8450 2042c0-7 40-162 90-345 49-182 105-390 124-462l35-130-4 950-10-848-68 254c-37 140-88 328-112 417-40 150-55 195-55 164z"/><path d="m7032 628c-14-14-17-285-4-306 11-17 311-44 330-30 18 15 17 301-1 317-7 6-74 15-148 21-167 12-163 12-177-2zm216-14c122-7 114 6 110-179l-3-130-116 3c-63 1-135 6-160 10l-44 8-3 138c-3 163 0 170 67 162 25-3 92-8 149-12z"/><path d="m7047 605c-3-7-6-71-6-143v-129l52-6c29-4 98-9 155-13l103-7-6 288-70 6c-178 17-223 18-228 4z"/></g></svg></a></li></ul></nav><br><div class="container-fluid"><h2>Thank you for contacting me.</h2><p>Your message was:</p><div class="jumbotron"><p><b>Subject: '+req.body.subject+'<br>Body: '+req.body.body+'<b></p></div><p>I will try to contact you ASAP.</p><hr><p>This email was sent to: '+req.body.email+'</div></body></html>'
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
