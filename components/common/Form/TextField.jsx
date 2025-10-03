"use client";

import { Input } from "@headlessui/react";

export default function TextField({
  label = "Service Name",
  subLabel = false,
  name = "full_name",
  placeholder = "",
  classInput = "",
  onChange,
  type = "text",
  register,
  rules = {},
  error, // <-- pass RHF error here
  classes = "",
}) {
  return (
    <div className={`flex flex-col gap-y-[8px] ${classes}`}>
      {/* Label */}
      {label && subLabel ? (
        <div className="w-full gap-x-[7px] flex items-center">
          <label
            htmlFor={name}
            className="text-[14px] lg:text-[16px] font-poppins font-medium text-white"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontStyle: "medium",
              lineHeight: "20px",
            }}
          >
            {label}
          </label>
          <label
            htmlFor={name}
            className="text-[14px] lg:text-[12px] italic font-haas font-bold text-white"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 500,
              fontStyle: "medium",
              lineHeight: "20px",
            }}
          >
            {subLabel}
          </label>
        </div>
      ) : (
        <label
          htmlFor={name}
          className="text-[14px] lg:text-[16px] font-poppins font-medium text-white"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 500,
            fontStyle: "medium",
            lineHeight: "20px",
          }}
        >
          {label}
        </label>
      )}

      {/* Input */}
      <Input
        id={name}
        {...(register ? register(name, rules) : {})} // RHF registration
        type={type}
        placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e) : undefined}
        className={`border-b text-white text-[12px] leading-[24px] font-poppins font-normal placeholder:text-[#00000033] focus:outline-none ${
          error ? "border-red-500" : "border-[#FFFFFF1A]"
        } ${classInput}`}
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontStyle: "normal",
          letterSpacing: "0%",
        }}
      />

      {/* Error Message */}
      {error && (
        <span className="text-red-500 text-xs mt-1 font-poppins">
          {error.message || "This field is required"}
        </span>
      )}
    </div>
  );
}
