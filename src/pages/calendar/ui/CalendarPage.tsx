import { AddTransactionForm } from "@/features/add-transaction/ui/AddTransactionForm";
import { MonthView } from "@/features/calendar/month/ui/MonthView";
import { WeekView } from "@/features/calendar/week/ui/WeekView";
import { ListTransactions } from "@/features/listTransactions/ui/ListTransactions";
import { useState } from "react";
import type { ViewMode } from "@/features/calendar/model/types";
import { CalendarHeader } from "@/features/calendar/header/ui/CalendarHeader";

export const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const [viewMode, setViewMode] = useState<ViewMode>("month");

  const goPrev = () => {
    setCurrentDate((prev) =>
      viewMode === "month"
        ? new Date(prev.getFullYear(), prev.getMonth() - 1)
        : new Date(prev.setDate(prev.getDate() - 7))
    );
  };

  const goNext = () => {
    setCurrentDate((prev) =>
      viewMode === "month"
        ? new Date(prev.getFullYear(), prev.getMonth() + 1)
        : new Date(prev.setDate(prev.getDate() + 7))
    );
  };

  return (
    <main className="mt-[6.5rem] px-[1.563rem] flex items-start gap-[1.25rem]">
      <AddTransactionForm selectedDate={selectedDate} />

      <div className="w-[75.5rem] h-[68.5rem] bg-surface-2 rounded-3xl px-[2.185rem] pt-[1.3rem]">
        <CalendarHeader
          currentDate={currentDate}
          viewMode={viewMode}
          onChangeView={setViewMode}
          onPrev={goPrev}
          onNext={goNext}
        />
        {viewMode === "month" && (
          <MonthView
            currentDate={currentDate}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
        )}

        {viewMode === "week" && (
          <WeekView
            currentDate={currentDate}
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
        )}
      </div>

      <ListTransactions selectedDate={selectedDate} />
    </main>
  );
};
