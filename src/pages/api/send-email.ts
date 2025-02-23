import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
    try {
        const formData = await request.json();
        const { name, email, telephone, subject, message } = formData;
        
        if (!name || !email || !telephone || !subject || !message) {
            return new Response(JSON.stringify({ error: "Todos los campos son obligatorios." }), {status: 400});
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 465,
            secure: process.env.SMTP_PORT === "465",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            },
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: "reservas@iquitosexpedition.com",
            subject: `Nuevo mensaje de contacto: ${subject}`,
            text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${telephone}\nMensaje: ${message}`
        };

        await transporter.sendMail(mailOptions);
        
        return new Response(JSON.stringify({ message: "Mensaje enviado correctamente." }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (error) {
        console.error("Error al enviar el correo", error);
        return new Response(JSON.stringify({ error: "Error al enviar el mensaje." }), { status: 500 });
    }
};