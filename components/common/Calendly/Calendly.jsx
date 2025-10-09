import React from "react";
import { useCalendlyEventListener, InlineWidget } from "react-calendly";
import backImage from "@/public/images/back.png";

function Calendly({ watch, setStep, step, onClick }) {
    useCalendlyEventListener({
        onEventScheduled: async (e) => {
            console.log("Event scheduled payload:", e.data.payload);

            // Get current form values
            const formValues = watch ? watch() : {};
            console.log("Current form values:", formValues);

            try {
                const res = await fetch(`/api/form`, {
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
        <div className="border border-[#F8B03B] w-full backdrop-blur-[10px] bg-[#FFFFFF1A] rounded-[8px] flex flex-col gap-y-[10px] scrollbar-hide max-sm:p-5">
            <img
                src={backImage.src}
                alt="back"
                onClick={onClick}
                className="w-[30px] h-[30px] cursor-pointer block sm:m-5"
            />
            <InlineWidget
                url="https://calendly.com/tarzan-ancestroenergy/30min"
                styles={{
                    width: "100%",
                    height: "700px",
                    color: "#FFFFFF9C",
                    borderRadius: "20px"
                }}
                pageSettings={{
                    backgroundColor: "#2d2c2c",
                    primaryColor: "f8b03b",
                    textColor: "ffffff"
                }}
                buttonText="Book Appointment"
            />

        </div>
    );
}

export default Calendly;
