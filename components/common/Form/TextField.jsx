"use client";

import { Input } from "@headlessui/react";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

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
  country = "US",
}) {
  const { t, i18n } = useTranslation();

  // 🔄 State to trigger re-render on language change
  const [lang, setLang] = useState(i18n.language);
  useEffect(() => {
    console.log("Language chaned" + i18n.language);
    const handleChange = () => setLang(i18n.language);
    i18n.on("languageChanged", handleChange);
    return () => {
      i18n.off("languageChanged", handleChange);
    };
  }, [i18n.language]);

  // Validation map
  const rulesMap = {
    tel: {
      validate: (value) => {
        if (!value) return t("errors.phoneRequiered");

        const phoneNumber = parsePhoneNumberFromString(value);

        if (!phoneNumber) return t("errors.phoneFormat");
        if (!phoneNumber.isValid()) return t("errors.phoneValid");
        if (!phoneNumber.isPossible()) return t("errors.phoneIncomplete");

        if (phoneNumber.country === "DE") {
          const length = phoneNumber.nationalNumber.length;
          if (length < 11) {
            return t("errors.phoneGerman");
          }
        }
        return true;
      },
    },
    email: {
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: t("errors.emailValid"), // use i18n instead of hardcoded
      },
    },
    number: {
      pattern: {
        value: /^[0-9]*$/,
        message: t("errors.onlyNumbers"), // use i18n instead of hardcoded
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
        {...(register ? register(name, { ...rules}) : {})}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        onChange={onChange ? (e) => onChange(e) : undefined}
        className={`border-b text-white text-[15px] leading-[24px] font-haas font-normal placeholder:text-[#00000033] focus:outline-none ${
          error ? "border-red-500" : "border-[#FFFFFF1A]"
        } ${classInput}`}
      />

      {error && (
        <span className="text-red-500 text-xs mt-1 font-poppins">
          { t("errors.required")}
        </span>
      )}
    </div>
  );
}
