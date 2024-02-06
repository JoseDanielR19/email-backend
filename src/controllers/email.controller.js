import nodemailer from "nodemailer";
import { response } from "../helpers/response.js";

export const sendEmail = async (req, replay) => {
  const { name, email, number, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "rodriguezbedoyajose@gmail.com",
      pass: "mtgo lwne iayb rylz",
    },
  });

  const mailOptions = {
    from: "rodriguezbedoyajose@gmail",
    to: email,
    subject,
    text,
    html: `<div style="max-width: 400px; margin: 0 auto; background-color: #f8f8f8; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: center;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/640px-Gmail_icon_%282020%29.svg.png" alt="Email Sent" style="max-width: 100px; margin-bottom: 20px;">
    <h1 style="color: darkred; font-size: 24px; margin-bottom: 20px;">Gracias, ${name}!</h1>
    <p style="margin-bottom: 8px;">Tu correo ha sido enviado con éxito.</p>
    <p style="margin-bottom: 8px;"><strong>Email:</strong> ${email}</p>
    <p style="margin-bottom: 8px;"><strong>Number:</strong> ${number}</p>
    <p style="margin-bottom: 8px;"><strong>Subject:</strong> ${subject}</p>
    <p style="margin-bottom: 8px;"><strong>Message:</strong> ${text}</p>
  </div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("correo enviado", info.response);
    response(replay, 200, true, "", "correo enviado");
  } catch (error) {
    response(replay, 500, false, "", "error al enviar el correo");
  }
};
