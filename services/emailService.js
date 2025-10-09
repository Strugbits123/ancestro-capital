import sgMail from "@/lib/sendGrid";
import { formatDateTime } from "@/utils/dateUtils";

/**
 * Helper to build meeting time string
 * @param {Object} calendly - calendly object with eventStart & eventEnd
 * @returns {string} formatted meeting time or "Unknown"
 */
function buildMeetingTime(calendly) {
    if (!calendly?.eventStart || !calendly?.eventEnd) return "Unknown";

    const startFormatted = formatDateTime(calendly.eventStart);
    const endFormatted = new Date(calendly.eventEnd).toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Asia/Karachi",
    });

    return `${startFormatted} - ${endFormatted}`;
}

/**
 * Send confirmation email to user
 * @param {Object} formData 
 */
export async function sendUserConfirmation(formData) {
    const meetingTime = buildMeetingTime(formData?.calendly);

    const msg = {
        to: formData?.email,
        from: process.env.SENDGRID_FROM_EMAIL,
        templateId: "d-4b7a8207c61146c7b15e1f8d272ca482",
        dynamic_template_data: {
            name: formData?.name || "Unknown",
            email: formData?.email || "Unknown",
            phoneNumber: formData?.phoneNumber || "Unknown",
            countryOfResidency: formData?.countryOfResidency || "Unknown",
            investmentRange: formData?.investmentRange || "Unknown",
            preferredTerm: formData?.preferredTime || "Unknown",
            investTime: formData?.investTime || "Unknown",
            investedBefore: formData?.investedBefore || "Unknown",
            investorType: formData?.individualInvestor || "Unknown",
            referral: formData?.referral || "Unknown",
            accreditedInvestor: formData?.accreditedInvestor || "Unknown",
            meetingTime,
        },
    };

    await sgMail.send(msg);
}

/**
 * Send notification email to admin
 * @param {string} adminEmail - admin recipient email
 * @param {Object} formData - user form data
 */
export async function sendAdminNotification(adminEmail, formData) {
    const meetingTime = buildMeetingTime(formData?.calendly);

    const msg = {
        to: adminEmail || process.env.SENDGRID_FROM_EMAIL,
        from: process.env.SENDGRID_FROM_EMAIL,
        templateId: "d-a24db01f962f4c36b354c122af61f528",
        dynamic_template_data: {
            name: formData?.name || "Unknown",
            email: formData?.email || "Unknown",
            phoneNumber: formData?.phoneNumber || "Unknown",
            countryOfResidency: formData?.countryOfResidency || "Unknown",
            investmentRange: formData?.investmentRange || "Unknown",
            preferredTerm: formData?.preferredTime || "Unknown",
            investTime: formData?.investTime || "Unknown",
            investedBefore: formData?.investedBefore || "Unknown",
            investorType: formData?.individualInvestor || "Unknown",
            referral: formData?.referral || "Unknown",
            accreditedInvestor: formData?.accreditedInvestor || "Unknown",
            meetingTime,
        },
    };

    await sgMail.send(msg);
}
