import clientPromise from "../../../lib/mongodb";
import axios from "axios";

// Your Calendly personal access token
const ACCESS_TOKEN = process.env.Access_Token;

// Fetch full invitee data
async function getInviteeDetails(inviteeUri) {
  const response = await axios.get(inviteeUri, {
    headers: { "Authorization": `Bearer ${ACCESS_TOKEN}` }
  });
  return response.data;
}

// Fetch event data
async function getEventDetails(eventUri) {
  const response = await axios.get(eventUri, {
    headers: { "Authorization": `Bearer ${ACCESS_TOKEN}` }
  });
  return response.data;
}

// Format date/time
function formatDateTime(isoString, timezone = "Asia/Karachi") {
  const date = new Date(isoString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: timezone
  });
}

export async function POST(req) {
  try {
    const body = await req.json();

    // If Calendly invitee URI is passed in body, fetch details
    let calendlyData = {};
    if (body.inviteeUri) {
      const inviteeData = await getInviteeDetails(body.inviteeUri);
      const eventData = await getEventDetails(inviteeData.resource.event);

      calendlyData = {
        inviteeName: inviteeData.resource.name || "Unknown",
        eventStart: formatDateTime(eventData.resource.start_time, inviteeData.resource.timezone),
        eventEnd: formatDateTime(eventData.resource.end_time, inviteeData.resource.timezone),
        inviteeEmail: inviteeData.resource.email || null
      };
    }

    // Merge form data with Calendly data
    const dataToInsert = { ...body, calendly: calendlyData };

    console.log("Form submission Data is: ",body+" Calendly data is: ",calendlyData);

    // Insert into MongoDB
    const client = await clientPromise;
    const db = client.db("ancestro");
    const collection = db.collection("submissions");

    const result = await collection.insertOne(dataToInsert);

    return new Response(
      JSON.stringify({ success: true, id: result.insertedId }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("MongoDB insert error:", err);
    return new Response(
      JSON.stringify({ error: "Failed to insert data" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
