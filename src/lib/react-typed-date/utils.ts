export const getMaxDaysInMonth = (month: number, year: number): number => {
  if (month === 2) {
    return isLeapYear(year) ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
};

export const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const isValidDate = (
  year: number,
  month: number,
  day: number,
): boolean => {
  if (year < 100) {
    return false;
  }

  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
};

export const pad = (num: number | null, length: number): string => {
  if (num === null) return "_".repeat(length);
  return String(num).padStart(length, "0");
};
