<!-- src/lib/components/ThemeToggle.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';

  let isDark = false;

  onMount(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      isDark = saved === 'dark';
    } else {
      isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    applyTheme();
  });

  function toggle() {
    isDark = !isDark;
    applyTheme();
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  function applyTheme() {
    document.documentElement.setAttribute('data-bs-theme', isDark ? 'dark' : 'light');
  }
</script>

<button class="btn btn-outline-secondary" on:click={toggle} aria-label="Toggle theme">
  {#if isDark}
    <i class="bi bi-sun-fill"></i>
  {:else}
    <i class="bi bi-moon-stars-fill"></i>
  {/if}
</button>