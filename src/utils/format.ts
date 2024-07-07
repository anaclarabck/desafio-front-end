function formatDate(date: string) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("pt-BR");
}

function formatPhoneNumber(phoneNumber: string) {
  if (phoneNumber.length < 13) {
    return "Número inválido";
  }
  const countryCode = phoneNumber.slice(0, 2);
  const areaCode = phoneNumber.slice(2, 4);
  const part1 = phoneNumber.slice(4, 9);
  const part2 = phoneNumber.slice(9, 13);

  return `+${countryCode} (${areaCode}) ${part1}-${part2}`;
}

export { formatDate, formatPhoneNumber };
