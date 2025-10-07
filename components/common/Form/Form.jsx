"use client";

import { useTranslation } from "react-i18next";
import TextField from "./TextField";
import StepperHeading from "./StepperHeading";
import SelectField from "./SelectField";
import CheckboxField from "./CheckBoxField";
import ThanksBox from "./ThanksBox";
import { Controller } from "react-hook-form";

export default function MultiStepForm({
  step,
  setStep,
  nextStep,
  prevStep,
  control,
  register,
  watch,
  setValue,
  handleSubmit,
  errors,
}) {
  const { t } = useTranslation();

  const handleNextStep = () => {
    handleSubmit(() => setStep(step + 1))();
  };

  return (
    <div
      className={`w-full flex flex-col mb-[-20%] gap-y-[50px] max-w-[823px] bg-[#FFFFFF1A] rounded-[20px] p-[20px] sm:p-[50px] backdrop-blur-[10px] ${step === 5 ? "border border-[#F8B03B]" : ""
        }`}
    >
      {step < 5 && <StepperHeading step={step} onClick={prevStep} />}

      {step === 6 ? (
        <ThanksBox />
      ) : (
        <div>
          {/* Step 1 */}
          {step === 1 && (
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-[40px] gap-y-[20px]">
              <TextField
                label={t("form.fullName")}
                name="name"
                register={register}
                rules={{ required: "This field is required" }}
                error={errors?.name}
              />
              <TextField
                label={t("form.email")}
                name="email"
                type="email"
                register={register}
                rules={{ required: "This field is required" }}
                error={errors?.email}
              />
              <TextField
                label={t("form.phoneNumber")}
                name="phoneNumber"
                type="tel"
                register={register}
                rules={{ required: "This field is required" }}
                error={errors?.phoneNumber}
              />
              <TextField
                label={t("form.countryOfResidency")}
                name="countryOfResidency"
                register={register}
                rules={{ required: "This field is required" }}
                error={errors?.countryOfResidency}
              />
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="w-full flex flex-col lg:grid lg:grid-cols-2 gap-x-[40px] gap-y-[40px]">
              <Controller
                name="investmentRange"
                control={control}
                rules={{ required: "Please select an option" }}
                render={({ field }) => (
                  <SelectField
                    label={t("form.InvestmentRange.name")}
                    option={t("form.InvestmentRange.options", {
                      returnObjects: true,
                    })}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors?.investmentRange}
                  />
                )}
              />
              <Controller
                name="preferredTime"
                control={control}
                rules={{ required: "Please select an option" }}
                render={({ field }) => (
                  <SelectField
                    label={t("form.preferredTime.name")}
                    option={t("form.preferredTime.options", {
                      returnObjects: true,
                    })}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors?.preferredTime}
                  />
                )}
              />
              <div className="col-span-2 ">
                <TextField
                  subLabel={t("form.investTimeSubLabel")}
                  label={t("form.investTime")}
                  name="investTime"
                  register={register}
                  rules={{ required: "This field is required" }}
                  error={errors?.investTime}
                />
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="w-full grid grid-cols-1 gap-x-[40px] gap-y-[40px]">
              <Controller
                name="investedBefore"
                control={control}
                rules={{ required: "Please select an option" }}
                render={({ field }) => (
                  <CheckboxField
                    label={t("form.investedBefore.name")}
                    options={t("form.investedBefore.options", {
                      returnObjects: true,
                    })}
                    value={field.value}
                    onChange={field.onChange}
                    multiple={false} // single-select
                    error={errors?.investedBefore}
                  />
                )}
              />
              <Controller
                name="individualInvestor"
                control={control}
                rules={{ required: "Please select an option" }}
                render={({ field }) => (
                  <SelectField
                    label={t("form.individualInvestor.name")}
                    option={t("form.individualInvestor.options", {
                      returnObjects: true,
                    })}
                    value={field.value}
                    onChange={field.onChange}
                    error={errors?.individualInvestor}
                  />
                )}
              />
              <TextField
                label={t("form.referral")}
                name="referral"
                register={register}
                error={errors?.referral}
              />
              <Controller
                name="accreditedInvestor"
                control={control}
                rules={{ required: "Please select an option" }}
                render={({ field }) => (
                  <CheckboxField
                    label={t("form.accreditedInvestor.name")}
                    options={t("form.accreditedInvestor.options", {
                      returnObjects: true,
                    })}
                    value={field.value}
                    onChange={field.onChange}
                    multiple={false} // single-select
                    error={errors?.accreditedInvestor}
                  />
                )}
              />
            </div>
          )}


          {step === 4 && (
            <Controller
              name="checkAll"
              control={control}
              defaultValue={[]}
              rules={{
                validate: (val) => {
                  const allOptions = [
                    t("form.option1"),
                    t("form.option2"),
                    t("form.option3"),
                  ];

                  // Check if all options are selected
                  const allSelected = allOptions.every((opt) => val.includes(opt));
                  return allSelected || "Please acknowledge all points by selecting every option";
                },
              }}
              render={({ field, fieldState }) => (
                <>
                  <CheckboxField
                    baseClass="flex-col gap-y-[10px]"
                    label={t("form.checkAll")}
                    options={[
                      t("form.option1"),
                      t("form.option2"),
                      t("form.option3"),
                    ]}
                    value={field.value || []}
                    onChange={field.onChange}
                    multiple={true}
                  />
                  {fieldState?.error && (
                    <span className="text-red-500 text-sm mt-1">{fieldState.error.message}</span>
                  )}
                </>
              )}
            />
          )}


          <div className="flex justify-between mt-4">
            {step < 4 ? (
              <button
                type="button"
                onClick={handleNextStep}
                className="w-full uppercase bg-[#F8B03B] font-haas font-bold text-[#000000] cursor-pointer rounded-[50px] px-4 py-3"
              >
                {t("form.next")}
              </button>
            ) : (
              <button
                type="submit"
                className="w-full uppercase bg-[#F8B03B] font-haas font-bold text-[#000000] cursor-pointer rounded-[50px] px-4 py-2"
              >
                {t("form.bookAppointment")}
              </button>
            )}
          </div>

        </div>
      )}
    </div>
  );
}
