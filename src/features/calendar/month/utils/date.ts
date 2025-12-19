// сегодня
export const getToday = () => new Date();
// начало месяца
export const getStartOfMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};
// дни месяца
export const getDaysInMonth = (date: Date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};
//день недели 0-пн 1-вт и тд
export const getWeekday = (date: Date) => {
  const day = date.getDay();
  return day === 0 ? 6 : day - 1;
};