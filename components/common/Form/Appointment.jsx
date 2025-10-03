"use client";
import React, { useState } from "react";
import backImage from "@/public/images/back.png";

// Utility: generate days for a month
function generateCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const weeks = [];
  let currentWeek = new Array(firstDay).fill(null);

  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }

  if (currentWeek.length) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }
  return weeks;
}

export default function BookingCalendar({ onClick }) {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(today);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const weeks = generateCalendar(year, month);

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Example: only these dates available
  const availableDays = [23, 24, 25, 26, 29];

  // Example time slots
  const availableSlots = ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"];

  const goToPrevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const goToNextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  return (
    <div className="flex items-center justify-center">
      <div className="text-white w-full h-full rounded-xl overflow-hidden flex">
        {/* Left Panel */}
        <div className="w-[50%] p-6 flex flex-col justify-between">
          <div className="flex flex-col gap-y-[10px]">
            <img
              src={backImage.src}
              alt="back"
              onClick={onClick}
              className="w-[30px] h-[30px] left-0 cursor-pointer"
            />
            <div className="flex items-center space-x-2 mt-[23px]">
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                <span className="text-yellow-500 font-bold">A</span>
              </div>

              <h2 className="text-sm font-semibold">ANCESTRO ENERGY</h2>
            </div>
            <h1 className="text-2xl font-bold mt-6">Product Demo</h1>
            <p className="mt-2 text-sm opacity-80">30 min • Panamá City</p>
            <p className="text-sm mt-6 opacity-90">
              This is an example of a meeting you would have with a potential
              customer to demonstrate your product.
            </p>
          </div>
          <div className="flex justify-between items-center text-xs opacity-70 mt-6">
            <button className="hover:underline">Cookie settings</button>
            <button className="hover:underline">Report abuse</button>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-px bg-[#FFFFFF1A]" />

        {/* Right Panel with Calendar */}
        <div className="w-[60%] p-6 flex flex-col">
          <h3 className="text-[20px] font-semibold mb-4">
            Select a Date & Time
          </h3>

          {/* Calendar */}
          <div className=" rounded-xl w-full p-4">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <button onClick={goToPrevMonth}>
                <svg width="9" height="14" viewBox="0 0 9 14">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.9806 12.9941C8.3398 12.6529 8.3398 12.0998 7.9806 11.7586L2.97062 7L7.9806 2.24141C8.3398 1.90023 8.3398 1.34706 7.9806 1.00589C7.6214 0.664705 7.039 0.664705 6.6798 1.00589L1.01941 6.38223C0.660197 6.72341 0.660197 7.2766 1.01941 7.61779L6.6798 12.9941C7.039 13.3353 7.6214 13.3353 7.9806 12.9941Z"
                    fill="white"
                    fillOpacity="0.61"
                  />
                </svg>
              </button>

              <span className="text-lg font-semibold text-yellow-400">
                {monthNames[month]} {year}
              </span>

              <button onClick={goToNextMonth}>
                <svg
                  width="9"
                  height="14"
                  viewBox="0 0 9 14"
                  style={{ transform: "rotate(180deg)" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.9806 12.9941C8.3398 12.6529 8.3398 12.0998 7.9806 11.7586L2.97062 7L7.9806 2.24141C8.3398 1.90023 8.3398 1.34706 7.9806 1.00589C7.6214 0.664705 7.039 0.664705 6.6798 1.00589L1.01941 6.38223C0.660197 6.72341 0.660197 7.2766 1.01941 7.61779L6.6798 12.9941C7.039 13.3353 7.6214 13.3353 7.9806 12.9941Z"
                    fill="white"
                    fillOpacity="0.61"
                  />
                </svg>
              </button>
            </div>

            {/* Weekday names */}
            <div className="grid grid-cols-7 text-xs text-gray-300 mb-2">
              {dayNames.map((d) => (
                <div key={d} className="text-center font-medium">
                  {d}
                </div>
              ))}
            </div>

            {/* Calendar Days */}
            <div className="grid grid-cols-7 gap-1 text-sm">
              {weeks.map((week, i) =>
                week.map((day, j) => {
                  const isAvailable = day && availableDays.includes(day);
                  const isSelected =
                    selectedDate &&
                    selectedDate.getDate() === day &&
                    selectedDate.getMonth() === month &&
                    selectedDate.getFullYear() === year;

                  return (
                    <div
                      key={i + "-" + j}
                      className={`h-10 w-10 flex items-center justify-center rounded-full cursor-pointer transition 
                        ${
                          isAvailable
                            ? isSelected
                              ? "bg-yellow-500 text-black font-bold"
                              : "hover:bg-yellow-500/20"
                            : "text-gray-500 cursor-not-allowed"
                        }
                      `}
                      onClick={() =>
                        isAvailable &&
                        setSelectedDate(new Date(year, month, day))
                      }
                    >
                      {day || ""}
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Time Slots */}
          {selectedDate && (
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">
                Select a Time on {selectedDate.toDateString()}:
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`py-2 px-3 rounded-lg text-sm transition 
                      ${
                        selectedSlot === slot
                          ? "bg-yellow-500 text-black font-bold"
                          : "bg-gray-700 hover:bg-yellow-500/20"
                      }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Confirm */}
          {/* <button
            disabled={!selectedDate || !selectedSlot}
            className={`mt-6 font-bold py-3 rounded-lg 
              ${
                selectedDate && selectedSlot
                  ? "bg-yellow-500 text-black hover:bg-yellow-400"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
          >
            {selectedDate && selectedSlot
              ? `SCHEDULE ${selectedSlot}`
              : "SELECT DATE & TIME"}
          </button> */}
        </div>
      </div>
    </div>
  );
}
