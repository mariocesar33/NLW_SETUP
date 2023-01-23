import { FastifyInstance } from "fastify";

import { prisma } from "./prisma/database";

export async function appRoutes(app: FastifyInstance) {
  app.post("/habits", async (request) => {
    
    const { title, weekDays }  =  request.body;
    
  });
}
