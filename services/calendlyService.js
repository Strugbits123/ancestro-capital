import axios from "axios";

const ACCESS_TOKEN = process.env.Access_Token;

export async function getInviteeDetails(inviteeUri) {
  const response = await axios.get(inviteeUri, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
  });
  return response.data;
}

export async function getEventDetails(eventUri) {
  const response = await axios.get(eventUri, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
  });
  return response.data;
}
