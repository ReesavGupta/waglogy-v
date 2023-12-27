const NodeMailer = require("nodemailer")
const sendMail = async (email) => {
  try {
    const transporter = await NodeMailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: true,
      secureConnection: false, // TLS requires secureConnection to be false
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      port: 465,
      debug: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    })
    const info = await transporter.sendMail({
      from: "info@waglogy.in",
      to: `${email}`,
      subject: "Welcome",
      text: "Hello",
      html: `<h1>Hi Mom</h1>`,
    })

    return info
  } catch (error) {
    return false
  }
}

module.exports = sendMail
