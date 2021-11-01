const express = require('express') 
const nodemailer = require('nodemailer')


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.get('/',(req,res)=>{
  res.json("sadv")
})

app.post('/send', async(req, res) => {
  

  // create reusable transporter object using the default SMTP transport
try{ let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "carol.rice63@ethereal.email", // generated ethereal user
      pass: "erR45ueDeJcdU9xxtd", // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Smart Egbuchulem 👻" <carol.rice63@ethereal.email>', // sender address
    to: "smartegbuchulem@gmail.com, mailsmartcodes@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<h3>output</h3>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  

      // res.render('contact', {msg:'Email has been sent'});
    
    }catch(error){
      console.log(error)
    }  
  });


app.listen(5000,()=>console.log('running'))





// let transporter = nodemailer.createTransport({
//     host: "smtp.ethereal.email",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: "carol.rice63@ethereal.email", // generated ethereal user
//       pass: "erR45ueDeJcdU9xxtd", // generated ethereal password
//     },
//   });

//   // send mail with defined transport object
//   let info = await transporter.sendMail({
//     from: '"Smart Egbuchulem 👻" <carol.rice63@ethereal.email>', // sender address
//     to: "smartegbuchulem@gmail.com, mailsmartcodes@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//   });

//   console.log("Message sent: %s", info.messageId);
  
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//   