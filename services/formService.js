import clientPromise from "@/lib/mongodb";
import { getInviteeDetails, getEventDetails } from "./calendlyService.js";
import { formatDateTime } from "@/utils/dateUtils.js";
import { sendUserConfirmation, sendAdminNotification } from "./emailService.js";

export async function processFormSubmission(body) {
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

    const dataToInsert = { ...body, calendly: calendlyData };

    // Insert into DB
    const client = await clientPromise;
    const db = client.db("ancestro");
    const collection = db.collection("submissions");
    const result = await collection.insertOne(dataToInsert);

    if (body.email) {
        await sendUserConfirmation(dataToInsert);
    }
    await sendAdminNotification(process.env.SENDGRID_FROM_EMAIL, dataToInsert);

    return { id: result.insertedId };
}
