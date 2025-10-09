"use client";

import { Fragment } from "react";
import {
  Listbox,
  Transition,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import { useTranslation } from "react-i18next";

export default function SelectField({
  option = ["Last 7 days", "Last 15 days", "Last 30 days"],
  label = false,
  name = "full_name",
  classes = "",
  mainIcon = false,
  value,
  onChange,
  error, // <-- RHF error
}) {
  const { t } = useTranslation();

  // Default fallback icon
  const DefaultIcon = () => (
    <svg
      width="13"
      height="5"
      viewBox="0 0 13 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.50451 5L0.00969358 -1.13565e-06L13.0001 0L6.50451 5Z"
        fill="#D9D9D9"
      />
    </svg>
  );

  return (
    <div className="flex flex-col">
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            {label && (
              <ListboxButton className="focus:outline-none">
                <div className="w-full flex justify-between items-center cursor-pointer">
                  <label
                    htmlFor={name}
                    className="text-[14px] lg:text-[16px] font-poppins font-normal text-white"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400 }}
                  >
                    {label}
                  </label>

                  {/* Icon */}
                  <DefaultIcon />
                </div>
              </ListboxButton>
            )}

            <div className="relative mt-[-1px]">
              <ListboxButton
                className={`relative ${mainIcon ? "flex items-center gap-x-[10px]" : ""
                  } w-full cursor-default py-2 pl-3 pr-10 text-left text-sm text-white focus:outline-none ${classes} border-b ${error ? "border-red-500" : "border-[#FFFFFF1A]"
                  }`}
              >
                {mainIcon}
                <span
                  className="block truncate"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 500,
                    lineHeight: "20px",
                  }}
                >
                  {value}
                </span>
              </ListboxButton>

              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions
                  className={`absolute mt-1 bg-black/90 backdrop-blur-sm max-h-60 w-full overflow-auto rounded-md border border-[#E5E5E5] text-sm shadow-lg focus:outline-none z-[5000] ${classes}`}
                >
                  {option.map((opt) => (
                    <ListboxOption
                      key={opt}
                      value={opt}
                      className={({ active }) =>
                        `relative cursor-pointer select-none py-2 pl-3 pr-4 ${active ? "bg-white/30 text-white" : "text-white"
                        } font-poppins font-semibold`
                      }
                    >
                      {opt}
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </Transition>
            </div>
          </>
        )}
      </Listbox>

      {/* Error Message */}
      {error && (
        <span className="text-red-500 text-xs mt-1 font-poppins">
          {t("errors.required")}
        </span>
      )}
    </div>
  );
}

