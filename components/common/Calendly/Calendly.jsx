import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";

function Calendly({ watch, setStep }) {
    useCalendlyEventListener({
        onEventScheduled: async (e) => {
            console.log("Event scheduled payload:", e.data.payload);

            // Get current form values
            const formValues = watch ? watch() : {};
            console.log("Current form values:", formValues);

            try {
                const res = await fetch("http://localhost:3001/api/form", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...formValues,
                        inviteeUri: e.data.payload.invitee.uri
                    })
                });

                const data = await res.json();
                console.log("Server response:", data);

                // Move to ThanksBox
                setStep((prev) => prev + 1);
            } catch (err) {
                console.error("Error sending to backend:", err);
            }
        }
    });

    return (
        <div>
            <InlineWidget url="https://calendly.com/awais90789/30min" />
        </div>
    );
}

export default Calendly;
