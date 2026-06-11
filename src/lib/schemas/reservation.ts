import { z } from "zod";

export const reservationSchema = z.object({
  date: z.string().min(1, "Selecciona una fecha"),
  time: z.string().min(1, "Selecciona una hora"),
  guests: z.coerce.number().min(1, "Mínimo 1 persona").max(12, "Máximo 12 personas"),
  location: z.enum(["centro", "calderon"], {
    required_error: "Selecciona un local",
  }),
  name: z.string().min(2, "Introduce tu nombre"),
  email: z.string().email("Email no válido"),
  phone: z.string().min(9, "Teléfono no válido"),
  notes: z.string().optional(),
});

export type ReservationFormData = z.infer<typeof reservationSchema>;