import nodemailer from "nodemailer";

export const sendEmail = async (email, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "your_email@gmail.com", pass: "your_password" },
  });
  await transporter.sendMail({ from: "your_email@gmail.com", to: email, subject, text });
};
