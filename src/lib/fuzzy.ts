// src/lib/fuzzy.ts

import { fuzzy } from 'fast-fuzzy';

function tokenizeAndSort(s: string): string {
  return s
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .sort((x, y) => x.localeCompare(y))
    .join(' ');
}

export interface SimilarityScores {
  ratio: number;
  partialRatio: number;
  tokenSortRatio: number;
  overall: number;
}

export function computeSimilarity(
  a: string,
  b: string,
  mode: 'average' | 'max' = 'average'
): SimilarityScores {
  if (!a || !b) {
    return { ratio: 0, partialRatio: 0, tokenSortRatio: 0, overall: 0 };
  }

  const options = {
    ignoreCase: true,
    ignoreSymbols: true,
    normalizeWhitespace: true,
    useDamerau: true
  };

  const ratio = fuzzy(a, b, { ...options, useSellers: false });
  const partialRatio = fuzzy(a, b, { ...options, useSellers: true });

  const tokenSortA = tokenizeAndSort(a);
  const tokenSortB = tokenizeAndSort(b);
  const tokenSortRatio = fuzzy(tokenSortA, tokenSortB, { ...options, useSellers: false });

  let overall: number;
  if (mode === 'max') {
    overall = Math.max(ratio, partialRatio, tokenSortRatio);
  } else {
    overall = (ratio + partialRatio + tokenSortRatio) / 3;
  }

  return {
    ratio: Math.round(ratio * 100) / 100,
    partialRatio: Math.round(partialRatio * 100) / 100,
    tokenSortRatio: Math.round(tokenSortRatio * 100) / 100,
    overall: Math.round(overall * 100) / 100
  };
}