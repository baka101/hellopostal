import nodemailer from 'nodemailer';

const postalAccount = process.env.HELLO_POSTAL_NAME;
const postalPass = process.env.HELLO_POSTAL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: postalAccount,
    pass: postalPass,
  },
});

const sendEmail = (toEmail, htmlTemplate) => {
  const mailOptions = {
    from: 'hellopostalco@gmail.com',
    to: toEmail,
    subject: 'Your HelloPostal Card',
    text: 'Your card is on its way!',
    html: htmlTemplate,
  };
  return transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log(info);
      console.log(`Preview Url: ${nodemailer.getTestMessageUrl(info)}`);
    }
  });
}

module.exports = sendEmail;
