import { sendEmail } from "../controllers/email.controller.js";

export const emailRoutes = (fastify, opts, done) => {
    fastify.post("/sendemail", sendEmail);
    done();
}