<!-- src/lib/components/TextAreaPair.svelte -->
<script lang="ts">
  import { writable } from 'svelte/store';

  export let textA: string = '';
  export let textB: string = '';

  const storeA = writable(textA);
  const storeB = writable(textB);

  $: textA = $storeA;
  $: textB = $storeB;

  function swap() {
    [textA, textB] = [textB, textA];
    $storeA = textA;
    $storeB = textB;
  }

  function clear() {
    textA = textB = '';
    $storeA = '';
    $storeB = '';
  }
</script>

<div class="row g-3">
  <div class="col-lg-6">
    <label for="textA" class="form-label fw-semibold">Text A</label>
    <textarea
      id="textA"
      class="form-control"
      rows="10"
      placeholder="Enter or paste first text..."
      bind:value={$storeA}
    ></textarea>
  </div>

  <div class="col-lg-6">
    <label for="textB" class="form-label fw-semibold">
      Text B
      <button type="button" class="btn btn-sm btn-outline-primary ms-2" on:click={swap}>
        <i class="bi bi-arrow-left-right"></i> Swap
      </button>
    </label>
    <textarea
      id="textB"
      class="form-control"
      rows="10"
      placeholder="Enter or paste second text..."
      bind:value={$storeB}
    ></textarea>
  </div>
</div>

<div class="mt-3 text-center">
  <button type="button" class="btn btn-outline-danger" on:click={clear}>
    <i class="bi bi-eraser"></i> Clear All
  </button>
</div>