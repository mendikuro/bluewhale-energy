import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

const contactSchema = z.object({
  name: z.string().min(2, "Full name is required").max(120),
  email: z.string().email("A valid email address is required").max(200),
  phone: z.string().max(40).optional().nullable(),
  company: z.string().max(160).optional().nullable(),
  service: z.string().max(160).optional().nullable(),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const firstError = Object.values(flat)[0]?.[0] ?? "Invalid form data";
      return NextResponse.json(
        { ok: false, error: firstError, fieldErrors: flat },
        { status: 400 }
      );
    }

    const submission = await db.contactSubmission.create({
      data: {
        name: parsed.data.name.trim(),
        email: parsed.data.email.trim().toLowerCase(),
        phone: parsed.data.phone?.trim() || null,
        company: parsed.data.company?.trim() || null,
        service: parsed.data.service?.trim() || null,
        message: parsed.data.message.trim(),
      },
    });

    return NextResponse.json({
      ok: true,
      id: submission.id,
      message: "Thank you. Our team will contact you within one business day.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Something went wrong. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}
