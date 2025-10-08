import clientPromise from "../../../lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("ancestro"); 
    const collection = db.collection("submissions");

    const result = await collection.insertOne(body);

    return new Response(JSON.stringify({ success: true, id: "21" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("MongoDB insert error:", err);
    return new Response(JSON.stringify({ error: "Failed to insert data" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
