import { processFormSubmission } from "@/services/formService.js";

export async function POST(req) {
  try {
    const body = await req.json();
    const result = await processFormSubmission(body);

    return new Response(
      JSON.stringify({ success: true, id: result.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Form submission error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to insert data" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
