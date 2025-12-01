<!-- src/lib/components/ShareUrl.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { encodeTexts } from '$lib/utils';
  import { goto } from '$app/navigation';

  export let textA: string = '';
  export let textB: string = '';

  $: shareUrl = $page.url.origin + $page.url.pathname + '?' + encodeTexts(textA, textB).toString();

  function copyShareLink() {
    navigator.clipboard.writeText(shareUrl);
    alert('Share link copied!');
  }
</script>

{#if textA || textB}
  <div class="input-group mt-3">
    <input type="text" class="form-control" value={shareUrl} readonly />
    <button class="btn btn-outline-secondary" type="button" on:click={copyShareLink}>
      <i class="bi bi-link-45deg"></i> Copy Link
    </button>
  </div>
  <small class="text-muted">Share this link — both texts will be restored automatically</small>
{/if}