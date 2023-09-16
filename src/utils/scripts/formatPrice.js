export function formatPrice(price) {
  const integer = parseInt(price);
  const formatedInteger = price < 10 ? `0${integer}` : integer;
  let remainder = Math.round((price - integer) * 100);
  remainder = remainder == 0 ? '00' : remainder;
  return `${formatedInteger},${remainder}`;
}
