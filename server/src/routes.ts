import { FastifyInstance } from "fastify";
import { z } from "zod";
import dayjs from "dayjs";

import { prisma } from "./database/database";

export async function appRoutes(app: FastifyInstance) {
  app.post("/habits", async (request) => {
    const createHabiBody = z.object({
      title: z.string(),// Não foce Obrigatorio seria assim title: z.string().nullable() -
      weekDays: z.array(
        z.number().min(0).max(6)
      ) // [0, 1, 2] => weeDays é um array de numeros
    });
    
    const { title, weekDays }  =  createHabiBody.parse(request.body);

    // o método starOf("day") => basicamente faz o seguinte, zera as hora, minutos e segundos: 00:00:00, para não trapalhar em uma listagem
    const today = dayjs().startOf("day").toDate() //=> vou transforma isso em objecto do javascript com método toDate()

    await prisma.habit.create({
      data: {
        title,
        created_at: today,
        weekDays: {
          create: weekDays.map(weekDay => {
            return { 
              week_day: weekDay
            }
          })
        }
      }
    });
  });
}
