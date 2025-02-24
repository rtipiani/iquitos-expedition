import { Resend } from "resend";
import type { APIRoute } from "astro";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY);
const RECAPTCHA_SECRET = import.meta.env.RECAPTCHA_SECRET_KEY;

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();

        if (!data.name || !data.email || !data.subject || !data.message) {
            return new Response(JSON.stringify({ error: "Todos los campos son obligatorios" }), { status: 400 });
        }

        const recaptchaVerify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: RECAPTCHA_SECRET,
                response: data.recaptchaToken
            })
        });

        const recaptchaResult = await recaptchaVerify.json();
        if (!recaptchaResult.success) {
            return new Response(JSON.stringify({ error: "Verificación de reCAPTCHA fallida" }), { status: 400 });
        }

        const emailResponse = await resend.emails.send({
            from: `Iquitos Expedition <${import.meta.env.RESEND_FROM}>`,
            to: [import.meta.env.MAIL_TO],
            cc: [data.email],
            subject: data.subject,
            text: `Nombre: ${data.name}\nTeléfono: ${data.telephone}\nEmail: ${data.email}\nMensaje:\n${data.message}`,
            html: 
            `<p>
                <strong>Nombre:</strong> 
                ${data.name}
            </p>
            <p>
                <strong>Teléfono:</strong>
                ${data.telephone}
            </p>
            <p>
                <strong>Email:</strong>
                ${data.email}
            </p>
            <p>
                <strong>Mensaje:</strong>
                ${data.message}
            </p>`
        });

        if (emailResponse.error) {
            return new Response(JSON.stringify({ error: "No se pudo enviar el correo" }), { status: 200 });
        }

        return new Response(JSON.stringify({ message: "Correo enviado correctamente" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: "Hubo un problema enviando el correo" }), { status: 500 });
    }
};