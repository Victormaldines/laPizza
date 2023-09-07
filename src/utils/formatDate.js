export function formatDate(date) {
  if (typeof date !== 'string') return;
  const extractedDate = extractDateFromString(date);
  const brazilianDate = convertDateToBrazilianFormat(extractedDate);
  return brazilianDate;
}

function extractDateFromString(date) {
  const regExp = /[\d]{4}-[\d]{2}-[\d]{2}/g;
  return date.match(regExp)[0];
}

function convertDateToBrazilianFormat(date) {
  const splitedDate = date.split('-');
  const brazilianDate = [splitedDate[2], splitedDate[1], splitedDate[0]];
  return brazilianDate.join('/');
}

formatDate();
