import crypto from "crypto";
import nodeMailer from "nodemailer";

const sendMail = async ({ to, subject, html }: { to: string; subject: string; html: string }) => {
    const transporter = nodeMailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: `Quizly - Youssef Shaaban`,
        to,
        subject,
        html,
    };

    await transporter.sendMail(mailOptions);
};

const generateEmailVerification = async (user: any) => {
    const token = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    user.emailVerification.token = hashedToken;
    user.emailVerification.expiresIn = new Date(Date.now() + 1000 * 60 * 60); // 1 hour
    await user.save();

    const confirmUrl = `${process.env.CLIENT_URL}/confirm-email?token=${token}`;

    await sendMail({
        to: user.email,
        subject: "Confirm your email",
        html: `<p>Please confirm your email by clicking the link below:</p>
           <a href="${confirmUrl}">${confirmUrl}</a>`,
    });
};

export { sendMail, generateEmailVerification };