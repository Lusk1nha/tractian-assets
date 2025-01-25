export async function waitFor(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function createArrayWithLength<T>(
  length: number,
  callback: (index: number) => T
) {
  return Array.from({ length }, (_, index) => callback(index));
}
