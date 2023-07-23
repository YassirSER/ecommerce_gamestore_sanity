import nodemailer from "nodemailer";
//-----------------------------------------------------------------------------
export async function sendMail(subject, fromEmail, toEmail, html) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
    secure: true,
  });
  // const transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: process.env.NODEMAILER_EMAIL,
  //     pass: process.env.NODEMAILER_PW,
  //   },
  // });

  const mailOptions = {
    from: fromEmail,
    to: toEmail,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}
