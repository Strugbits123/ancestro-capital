"use client";

export default function CheckboxField({
  label,
  baseClass = "",
  options = ["Option 1", "Option 2", "Option 3"],
  divClass = "",
  classes = "",
  tickIcon,
  value,        // controlled by RHF
  onChange,     // controlled by RHF
  multiple = false, // true for multi-select checkboxes
  error,        // pass RHF error object here
}) {
  const handleSelect = (opt) => {
    if (multiple) {
      // multi-select logic
      let newValue = Array.isArray(value) ? [...value] : [];
      if (newValue.includes(opt)) {
        newValue = newValue.filter((v) => v !== opt);
      } else {
        newValue.push(opt);
      }
      onChange(newValue);
    } else {
      // single-select logic
      onChange(value === opt ? "" : opt);
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      {label && (
        <label className="text-sm lg:text-base font-poppins font-medium text-white">
          {label}
        </label>
      )}

      <div className={`flex gap-x-6 ${baseClass}`}>
        {options.map((opt) => {
          const isChecked = multiple
            ? Array.isArray(value) && value.includes(opt)
            : value === opt;

          return (
            <div
              key={opt}
              className={`flex gap-x-[10px] items-center gap-y-1 ${divClass}`}
              onClick={() => handleSelect(opt)}
            >
              {/* Checkbox Box */}
              <div
                className={`flex flex-none w-[20px] h-[20px] items-center justify-center rounded border ${
                  error ? "border-red-500" : "border-gray-300"
                } cursor-pointer bg-[#FFFFFF33] ${classes}`}
              >
                {isChecked &&
                  (tickIcon ? (
                    tickIcon
                  ) : (
                    <svg
                      className="h-4 w-4 text-[#F8B03B] transition-opacity"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.70069 18C6.09858 17.9738 5.64512 17.6794 5.27691 17.1838C4.36999 15.9637 3.45174 14.7526 2.53802 13.5382C2.00533 12.8308 1.4651 12.1308 0.941465 11.4153C0.0217098 10.1584 0.609478 8.46311 2.06041 8.19079C2.61724 8.08612 3.10617 8.29138 3.51889 8.69209C4.50203 9.64643 5.47686 10.6114 6.45547 11.5715C6.83801 11.9468 6.97231 11.9403 7.32241 11.5118C10.3578 7.80072 13.3917 4.08885 16.4241 0.374521C16.5864 0.175802 16.744 -0.0212813 17.0157 0.00243407C17.4405 0.0392338 17.6374 0.52172 17.3914 0.955957C16.5818 2.38379 15.7639 3.8059 14.9483 5.22964C12.7066 9.14186 10.4619 13.0525 8.22481 16.968C7.86641 17.5952 7.36843 17.946 6.69993 18.0008L6.70069 18Z"
                        fill="#F8B03B"
                      />
                    </svg>
                  ))}
              </div>

              {/* Label */}
              <span className="text-sm text-white font-poppins font-normal">
                {opt}
              </span>
            </div>
          );
        })}
      </div>

      {/* Error Message */}
      {error && (
        <span className="text-red-500 text-xs mt-1 font-poppins">
          {error.message || "This field is required"}
        </span>
      )}
    </div>
  );
}
