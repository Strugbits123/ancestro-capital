// import clientPromise from "../../../lib/mongodb";

// export async function POST(req) {
//   try {
//     const body = await req.json();

//     const client = await clientPromise;
//     const db = client.db("ancestro"); 
//     const collection = db.collection("submissions");

//     const result = await collection.insertOne(body);

//     return new Response(JSON.stringify({ success: true, id: "21" }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (err) {
//     console.error("MongoDB insert error:", err);
//     return new Response(JSON.stringify({ error: "Failed to insert data" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }


import clientPromise from "../../../lib/mongodb";
import axios from "axios";

// Your Calendly personal access token
const ACCESS_TOKEN = "eyJraWQiOiIxY2UxZTEzNjE3ZGNmNzY2YjNjZWJjY2Y4ZGM1YmFmYThhNjVlNjg0MDIzZjdjMzJiZTgzNDliMjM4MDEzNWI0IiwidHlwIjoiUEFUIiwiYWxnIjoiRVMyNTYifQ.eyJpc3MiOiJodHRwczovL2F1dGguY2FsZW5kbHkuY29tIiwiaWF0IjoxNzU5OTMzMTIxLCJqdGkiOiI3NTJiODI5Ny01ZjE5LTRmMmUtOGZhMC02YjUyMjI0YmRjZmQiLCJ1c2VyX3V1aWQiOiI5NDQwMGVlZC0yNTE0LTQ5NDYtYmU4MS02YjU0YTU0YTY3YzUifQ.RGKnmsM0LKkLarNoYgMMQ5-6T349HBl7nB_PRxuGGPUsCyst0rqxzsTf__S-EJyZEbrfJII8yVPgBnTBhgixvQ";

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
