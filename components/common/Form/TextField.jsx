"use client";

import { Input } from "@headlessui/react";
import { parsePhoneNumberFromString } from "libphonenumber-js";

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
  error,
  classes = "",
  country = "US", // default country, can be passed in props
}) {
  // Validation map
  const rulesMap = {
    tel: {
      validate: (value) => {
        if (!value) return "Phone number is required";

        // Try to parse with given default country
        const phoneNumber = parsePhoneNumberFromString(value, country);

        if (!phoneNumber) return "Invalid phone number format";
        if (!phoneNumber.isValid()) return "Enter a valid phone number";

        return true;
      },
    },
    email: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address",
      },
    },
    number: {
      pattern: {
        value: /^[0-9]*$/,
        message: "Only numbers are allowed",
      },
    },
  };

  const extraRules = rulesMap[type] || {};

  return (
    <div className={`flex flex-col gap-y-[8px] ${classes}`}>
     
      {label && (
        <label
          htmlFor={name}
          className="text-[14px] lg:text-[16px] font-poppins uppercase font-medium text-white"
        >
          {label}{" "}
          {subLabel && (
            <span className="text-[12px] italic font-haas font-normal text-white">
              {subLabel}
            </span>
          )}
        </label>
      )}

     
      <Input
        id={name}
        {...(register ? register(name, { ...rules, ...extraRules }) : {})}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e) : undefined}
        className={`border-b text-white text-[15px] leading-[24px] font-haas font-normal placeholder:text-[#00000033] focus:outline-none ${error ? "border-red-500" : "border-[#FFFFFF1A]"
          } ${classInput}`}
      />

      
      {error && (
        <span className="text-red-500 text-xs mt-1 font-poppins">
          {error.message || "This field is required"}
        </span>
      )}
    </div>
  );
}
