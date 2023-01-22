import { FastifyInstance } from "fastify";

import { prisma } from "./prisma/database";

export async function appRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const habits = await prisma.habit.findMany()
  
    return habits;
  });
}
