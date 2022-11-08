"use strict";
const nodemailer = require("nodemailer");

async function sendMail(to,subject,body) {
  let transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: "support@curatedsolutions.in",
      pass: "Curated@123"
    },
  });

  let info = await transporter.sendMail({
    from: "jala9952@gmail.com",
    to,
    subject,
    text: body
  });
}

sendMail("chandru6501@gmail.com","skdjbksdbc","smdbjksdb").then((data)=>{
  console.log(data);
}).catch((err)=>{
  console.log()
  console.log(err.message);
});
