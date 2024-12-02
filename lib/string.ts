export function removeAccentsFromStr(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function getStringToSearch(str: string) {
  return removeAccentsFromStr(str).toLowerCase().trim();
}
