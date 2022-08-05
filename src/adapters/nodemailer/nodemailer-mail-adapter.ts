import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4ab78b57ab9558",
    pass: "10b4dfaf0951f3",
  },
});

export class NodemailerMailApadter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Diego fernandes <gabrielsantosoficial4@gmail.com>",
      subject,
      html: body,
    });
  }
}
