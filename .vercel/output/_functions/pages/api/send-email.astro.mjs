import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend("re_ErY75cYP_DFYnCWDiYfcc9vK4DZszU8Ui");
const RECAPTCHA_SECRET = "6LduDOEqAAAAAFCTmt5Jl-DOsE1sNG-riY76t_nP";
const POST = async ({ request }) => {
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
      from: `Iquitos Expedition <${"no-reply@iquitosexpedition.com"}>`,
      to: ["rtipiani3@gmail.com"],
      cc: [data.email],
      subject: data.subject,
      text: `Nombre: ${data.name}
Teléfono: ${data.telephone}
Email: ${data.email}
Mensaje:
${data.message}`,
      html: `<p>
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST,
    prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
