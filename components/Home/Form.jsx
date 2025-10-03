"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import MultiStepForm from "../common/Form/Form";
import { Typography } from "../common/Typography";
import ThanksBox from "../common/Form/ThanksBox";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const {
    handleSubmit,
    control,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      countryOfResidency: "",
      investmentRange: "",
      preferredTime: "",
      investTime: "",
      individualInvestor: "",
      investedBefore: "",
      referral: "",
      accreditedInvestor: "",
      checkAll: [],
    },
  });

  // Watch all form values (optional)
  const formValues = watch();
  useEffect(() => {
    console.log("Form Values Changed:", formValues);
  }, [formValues]);

  // Proceed to next step only if current step is valid
  const nextStep = async () => {
    // Validate all fields of current step
    let currentStepFields = [];

    if (step === 1) {
      currentStepFields = ["name", "email", "phoneNumber", "countryOfResidency"];
    } else if (step === 2) {
      currentStepFields = ["investmentRange", "preferredTime", "investTime"];
    } else if (step === 3) {
      currentStepFields = ["investedBefore", "individualInvestor", "accreditedInvestor"];
    } else if (step === 4) {
      currentStepFields = ["checkAll"];
    }

    // Validate only current step fields
    const isValid = await handleSubmit(() => setStep(step + 1))({
      ...formValues,
    }).catch(() => false);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data) => {
    try {
      console.log("Submitting Data:", data);

      const response = await fetch("/api/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setSubmitted(true);
      setStep(5); // go to ThanksBox
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="w-full bg-black pt-[150px] flex justify-center items-center bg-cover bg-center">
      <div className="w-full flex flex-col max-w-[931px] gap-y-[20px] items-center p-8 rounded-lg">
        <Typography.H3 className="text-white font-haas font-bold text-[30px] text-center uppercase">
          {t("form.title")}
        </Typography.H3>

        {step === 5 || submitted ? (
          <ThanksBox />
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <MultiStepForm
              step={step}
              setStep={setStep}
              nextStep={nextStep}
              prevStep={prevStep}
              control={control}
              register={register}
              watch={watch}
              setValue={setValue}
              errors={errors} // pass errors to show invalid fields
              handleSubmit={handleSubmit} // RHF submit handler
            />
          </form>
        )}
      </div>
    </div>
  );
}
