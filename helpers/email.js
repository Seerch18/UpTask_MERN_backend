import nodemailer from "nodemailer";

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Confirma tu cuenta",
    text: "Comprueba tu cuenta en UpTask",
    html: `<p>Hola ${nombre} Confirma tu cuenta en UpTask</p>
    <p>Tu cuenta ya está casi lista, solo debes confirmarla en el siguiente enlace:</p>
    <a href="${process.env.FRONTEND_URL_2}/confirmar/${token}">Confirmar Cuenta</a>
    <p>Si tu no creaste esta cuenta, puedes ignorar este mensaje</p>`,
  });
};

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Información del email

  const info = await transport.sendMail({
    from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
    to: email,
    subject: "UpTask - Reestablece tu Password",
    text: "Reestablece tu Password",
    html: `<p>Hola ${nombre} has solicitado reestablecer tu password</p>
    <p>Sigue el siguente enlace para generar un nuevo password:</p>
    <a href="${process.env.FRONTEND_URL_2}/olvide-password/${token}">Reestablecer Password</a>
    <p>Si tu no solicitaste este email, puedes ignorar este mensaje</p>`,
  });
};
