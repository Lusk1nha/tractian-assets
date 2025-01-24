export function getInitials(name: string, maxInitials = 2) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");

  return initials.slice(0, maxInitials).toUpperCase();
}
