export default function getFirstName(name) {
  const regExp = /\w*\W\s?/g;

  const firstName = regExp.exec(`${name}`);
  return firstName[0].trim();
}
