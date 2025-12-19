import { Button } from "@/shared/ui/button";
import ArrowLeftIcon from "@/shared/assets/icons/arrowLeft.svg?react";
import ArrowRightIcon from "@/shared/assets/icons/arrowRight.svg?react";
import { getStartOfWeek, getEndOfWeek} from "@/features/calendar/week/utils/date"
import type { ViewMode } from "@/features/calendar/model/types";

type Props = {
  currentDate: Date;
  viewMode: ViewMode;
  onChangeView: (view: ViewMode) => void;
  onPrev: () => void;
  onNext: () => void;
};

export const CalendarHeader: React.FC<Props> = ({
  currentDate,
  onPrev,
  onNext,
  onChangeView,
  viewMode,
}) => {
  const title =
    viewMode === "month"
      ? currentDate.toLocaleDateString("ru-RU", {
          month: "long",
          year: "numeric",
        })
      : `${getStartOfWeek(currentDate).toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
        })}-
        ${getEndOfWeek(currentDate).toLocaleDateString("ru-RU", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}`;

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2 bg-primary rounded-4xl">
        <Button onClick={onPrev} className="rounded-4xl cursor-pointer">
          <ArrowLeftIcon />
        </Button>

        <span className="first:capitalize text-xl">{title}</span>

        <Button onClick={onNext} className="rounded-4xl cursor-pointer">
          <ArrowRightIcon />
        </Button>
      </div>

      <div className="flex gap-5">
        <Button
          className={`text-xl font-normal px-[32px] rounded-3xl cursor-pointer
            ${
              viewMode === "month"
                ? "bg-primary"
                : "bg-input border-[3px] border-primary"
            }
            `}
          onClick={() => onChangeView("month")}
        >
          месяц
        </Button>
        <Button
          className={`text-xl font-normal px-[32px] rounded-3xl cursor-pointer
            ${
              viewMode === "week"
                ? "bg-primary"
                : "bg-input border-[3px] border-primary"
            }
            `}
          onClick={() => onChangeView("week")}
        >
          неделя
        </Button>
      </div>
    </div>
  );
};
