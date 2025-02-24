import { Resend } from "resend";
import type { APIRoute } from "astro";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY); // Usa la API Key desde el .env

export const POST: APIRoute = async ({ request }) => {
    try {
        const data = await request.json();
        
        console.log("📩 Datos recibidos:", data);

        if (!data.name || !data.email || !data.subject || !data.message) {
            return new Response(JSON.stringify({ error: "Todos los campos son obligatorios" }), { status: 400 });
        }

        // Enviar el correo con Resend
        const emailResponse = await resend.emails.send({
            from: `Tu Empresa <${import.meta.env.RESEND_FROM}>`, // Dirección de correo verificada en Resend
            to: [import.meta.env.MAIL_TO], // Destinatario
            subject: data.subject,
            text: `Nombre: ${data.name}\nEmail: ${data.email}\nMensaje:\n${data.message}`,
            html: `<p><strong>Nombre:</strong> ${data.name}</p>
                   <p><strong>Email:</strong> ${data.email}</p>
                   <p><strong>Mensaje:</strong> ${data.message}</p>`
        });

        console.log("📨 Respuesta de Resend:", emailResponse);

        return new Response(JSON.stringify({ message: "Correo enviado correctamente" }), { status: 200 });
    } catch (error) {
        console.error("❌ Error enviando correo:", error);
        return new Response(JSON.stringify({ error: "Hubo un problema enviando el correo" }), { status: 500 });
    }
};
