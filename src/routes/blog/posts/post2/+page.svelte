<script lang="ts">
  import {base} from '$app/paths';
</script>

<svelte:head>
  <title>How Ratio, Partial Ratio, and Token Sort Work | AxelBase</title>
  <meta name="description" content="Technical breakdown of the three fuzzy algorithms used in the checker: Ratio (Levenshtein), Partial Ratio, and Token Sort Ratio — with clear examples." />
  <meta property="og:title" content="How Ratio, Partial Ratio, and Token Sort Work | AxelBase" />
  <meta property="og:description" content="Technical breakdown of the three fuzzy algorithms used in the checker: Ratio (Levenshtein), Partial Ratio, and Token Sort Ratio — with clear examples." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How the Three Algorithms Work</p>
  </div>

  <article class="prose">
    <h1>How Ratio, Partial Ratio, and Token Sort Algorithms Work</h1>
    <p class="post-meta">Published: December 2, 2025</p>

    <p>The AxelBase Fuzzy Similarity Checker shows three different scores because no single algorithm is perfect for every situation. Each method solves a specific type of text variation.</p>

    <h2>1. Ratio – Classic Edit Distance</h2>
    <p>This is based on Levenshtein distance: how many single-character edits (insertions, deletions, substitutions) are needed to turn one string into the other. It treats the entire text as one sequence. Example: "kitten" → "sitting" needs 3 edits, so similarity is 70%. Great when texts are almost identical with small typos.</p>

    <h2>2. Partial Ratio – Best Substring Match</h2>
    <p>Perfect when a shorter string is contained inside a longer one. It finds the best-aligned substring. Example: searching "blast" inside "He had an absolute blast at the party" returns 100%. Extremely useful for detecting banned words hidden in sentences or short usernames inside long comments.</p>

    <h2>3. Token Sort Ratio – Word Order Doesn’t Care About Order</h2>
    <p>This method splits text into words (tokens), sorts them alphabetically, then compares. Example: "The quick brown fox jumps" and "jumps fox brown quick the" both become "brown fox jumps quick the" after sorting, so score 100%. Ideal for comparing sentences where word order changed but meaning stayed the same.</p>

    <h2>When to Trust Which Score</h2>
    <ul>
      <li>High Ratio → texts are nearly identical (good for duplicate detection)</li>
      <li>High Partial → short prohibited phrase appears anywhere</li>
      <li>High Token Sort → same words, different order (paraphrasing)</li>
    </ul>

    <p>By showing all three scores at once, you can choose the most appropriate one for your use case, or use Average/Highest mode for a balanced view.</p>

    <p class="italic-note">Understanding these differences helps you make smarter moderation, search, and data-cleaning decisions.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.95rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; }
  .prose p, .prose ul { color: var(--text-primary); }
  .italic-note { font-style: italic; text-align: center; margin-top: 3rem; color: var(--text-secondary); }
</style>