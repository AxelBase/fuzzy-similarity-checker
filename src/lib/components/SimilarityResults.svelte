<!-- src/lib/components/SimilarityResults.svelte -->
<script lang="ts">
  import type { SimilarityScores } from '$lib/fuzzy';

  export let scores: SimilarityScores;
  export let mode: 'average' | 'max' = 'average';
</script>

{#if scores.overall > 0}
  <div class="card border-primary shadow-sm">
    <div class="card-header bg-primary text-white">
      <h4 class="mb-0">Similarity Results</h4>
    </div>
    <div class="card-body">
      <div class="row text-center">
        <div class="col-4">
          <div class="h5 mb-1">Ratio</div>
          <div class="display-6 fw-bold text-primary">{(scores.ratio * 100).toFixed(1)}%</div>
        </div>
        <div class="col-4">
          <div class="h5 mb-1">Partial</div>
          <div class="display-6 fw-bold text-info">{(scores.partialRatio * 100).toFixed(1)}%</div>
        </div>
        <div class="col-4">
          <div class="h5 mb-1">Token Sort</div>
          <div class="display-6 fw-bold text-success">{(scores.tokenSortRatio * 100).toFixed(1)}%</div>
        </div>
      </div>

      <hr>

      <div class="text-center">
        <h3 class="mb-2">
          Overall: <span class="badge bg-dark fs-3">{(scores.overall * 100).toFixed(1)}%</span>
        </h3>
        <small class="text-muted">Calculated as {mode === 'average' ? 'average' : 'highest'} of the three scores</small>
      </div>
    </div>
  </div>
{:else}
  <div class="text-center text-muted py-5">
    <i class="bi bi-hourglass-split display-1"></i>
    <p class="mt-3">Start typing to see similarity scores</p>
  </div>
{/if}