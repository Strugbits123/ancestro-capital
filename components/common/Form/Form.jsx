"use client"; // if using Next.js App Router

import { useState } from "react";
import TextField from "./TextField";
import StepperHeading from "./StepperHeading";
import SelectField from "./SelectField";

export default function MultiStepForm({ classes }) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // You can send data to API here
    };

    return (
        <div className="w-full flex flex-col gap-y-[50px] max-w-[823px] bg-[#FFFFFF1A] rounded-[20px] p-[50px] backdrop-blur-[10px]">
           <StepperHeading step={step} onClick={prevStep}/>

            <form onSubmit={handleSubmit}>
                {step === 1 && (
                    <div className="w-full grid grid-cols-2 gap-x-[40px] gap-y-[20px]">
                        <TextField label="FULL NAME"/>
                        <TextField label="EMAIL"/>
                        <TextField label="PHONE NUMBER"/>
                        <TextField label="COUNTRY OF RESIDENCY"/>
                    </div>
                )}

                {step === 2 && (
                     <div className="w-full grid grid-cols-2 gap-x-[40px] gap-y-[40px]">
                        <SelectField />
                        <SelectField />
                        <div className="col-span-2">
                            <TextField label="How SOON ARE YOU LOOKING TO INVEST?(WITHING 30 DAYS /1-3 MONTHS/3+ MONTHS)"/>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <label className="block mb-2">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded"
                        />
                    </div>
                )}

                <div className="flex justify-between mt-4">

                    {step < 3 ? (
                        <button
                            type="button"
                            onClick={nextStep}
                            className="w-full bg-[#F8B03B] text-[#000000] cursor-pointer rounded-[50px] px-4 py-2 "
                        >
                            Next
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Submit
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
}
