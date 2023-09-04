type DateFormatterOptions = {
  year?: "numeric" | "2-digit";
  month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day?: "numeric" | "2-digit";
};

export const DateFormatter = (
  date: string,
  countryType: string,
  formatOptions: DateFormatterOptions
) => {
  return new Intl.DateTimeFormat(countryType, formatOptions).format(
    new Date(date)
  );
};
