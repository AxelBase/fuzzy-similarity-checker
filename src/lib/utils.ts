// src/lib/utils.ts

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export async function copyToClipboard(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}

function toBase64(str: string): string {
  return btoa(unescape(encodeURIComponent(str)));
}

function fromBase64(b64: string): string {
  try {
    return decodeURIComponent(escape(atob(b64)));
  } catch {
    return '';
  }
}

export function encodeTexts(a: string, b: string): URLSearchParams {
  const params = new URLSearchParams();
  params.set('a', toBase64(a));
  params.set('b', toBase64(b));
  return params;
}

export function decodeTexts(params: URLSearchParams): { a: string; b: string } {
  const a = params.get('a') ? fromBase64(params.get('a')!) : '';
  const b = params.get('b') ? fromBase64(params.get('b')!) : '';
  return { a, b };
}