import React from "react";
import { getToday } from "../utils/date";

type DayCellProps = {
  day: Date | null;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
};

export const DayCell: React.FC<DayCellProps> = ({
  day,
  selectedDate,
  onSelectDate,
}) => {
  const today = getToday();

  const isToday =
    day &&
    day.getDate() === today.getDate() &&
    day.getMonth() === today.getMonth() &&
    day.getFullYear() === today.getFullYear();

  if (!day) {
    return (
      <div className="h-[9.938rem] w-[9.938rem] rounded-4xl bg-surface-4" />
    );
  }

  const isSelected =
    selectedDate &&
    day.getDate() === selectedDate.getDate() &&
    day.getMonth() === selectedDate.getMonth() &&
    day.getFullYear() === selectedDate.getFullYear();

  return (
    <div
      onClick={() => onSelectDate(day)}
      className={`h-[9.938rem] w-[9.938rem] rounded-4xl p-2 text-sm bg-input cursor-pointer
        ${isSelected ? "bg-primary" : ""}
       `}>
      <div className="w-full">
         {day && (
           <div className={`text-2xl w-[2.25rem] h-[2.25rem] flex items-center justify-center rounded-xl ${isToday ? "bg-primary" : ""}`}>
             {day.getDate()}
           </div>
         )}
       </div>
    </div>
  );
};