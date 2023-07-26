// import nodemailer from "nodemailer";
import nodemailer from "nodemailer";

export async function sendMail(subject, fromEmail, toEmail, html) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_EMAIL,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PW,
    },
    secure: true,
  });

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        console.log("Server is ready to take our messages");
        resolve(success);
      }
    });
  });

  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: subject,
    html: html,
  };

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log("email sent");
        resolve(info);
      }
    });
  });

  // transporter.sendMail(mailOptions, function (error, info) {
  //   if (error) {
  //     throw new Error(error);
  //   } else {
  //     console.log("Email Sent");
  //     return true;
  //   }
  // });
}
