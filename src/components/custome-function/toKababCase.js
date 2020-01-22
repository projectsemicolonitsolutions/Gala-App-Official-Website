export const toKababCase = stringCase =>
  stringCase
    .replace(/\s/g, "-")
    .replace(/,/g, "")
    .replace(/!/g, "")
    .toLowerCase()
