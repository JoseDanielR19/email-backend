import Fastify from "fastify";
import cors from "@fastify/cors";
import formBody from "@fastify/formbody";
import { emailRoutes } from "./routes/email.routes.js";

const fastify = Fastify({ logger: true });

fastify.register(cors, { origin: "*" });
fastify.register(formBody);

// ROUTES
fastify.register(emailRoutes, { prefix: "/api" });

const start = async () => {
  try {
    await fastify.listen({ port: 4000, host: "0.0.0.0" });
    console.log("Servidor corriendo exitosamente");
  } catch (err) {
    console.log.error(err);
    process.exit(1);
  }
};

start();
