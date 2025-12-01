<!-- src/lib/components/ActionButtons.svelte -->
<script lang="ts">
  import { copyToClipboard } from '$lib/utils';
  import type { SimilarityScores } from '$lib/fuzzy';

  export let textA: string;
  export let textB: string;
  export let scores: SimilarityScores;
  export let mode: 'average' | 'max';

  async function copyResults() {
    const result = `Fuzzy Similarity Checker

Text A:
${textA.slice(0, 200)}${textA.length > 200 ? '...' : ''}

Text B:
${textB.slice(0, 200)}${textB.length > 200 ? '...' : ''}

Results (${mode} mode):
• Ratio:        ${(scores.ratio * 100).toFixed(1)}%
• Partial:      ${(scores.partialRatio *100).toFixed(1)}%
• Token Sort:   ${(scores.tokenSortRatio *100).toFixed(1)}%
• Overall:      ${(scores.overall *100).toFixed(1)}%

https://yourusername.github.io/fuzzy-similarity-checker/`;

    await copyToClipboard(result);
    alert('Results copied to clipboard!');
  }
</script>

<div class="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
  <button class="btn btn-success btn-lg" on:click={copyResults}>
    <i class="bi bi-clipboard-check"></i> Copy Results
  </button>
</div>