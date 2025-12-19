export const getToday = () => new Date();

// день недели
export const getWeekday = (date: Date) => {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
};

// начало недели
export const getStartOfWeek = (date: Date): Date => {
    const result = new Date(date);
    const dayWeek = getWeekday(result);

    result.setDate(result.getDate() - dayWeek)
    result.setHours(0,0,0,0);
    return result;
}

// конец недели
export const getEndOfWeek = (date: Date): Date => {
    const result = getStartOfWeek(date);
    result.setDate(result.getDate() + 6);
    return result;
}
//массив из дней недели
export const getWeekDays = (date: Date): Date[] => {
  const startOfWeek = getStartOfWeek(date);

  return Array.from({ length: 7 }, (_, i) => {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);
    return day;
  });
};