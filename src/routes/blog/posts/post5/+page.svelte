<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Private Blocklist Checking with Client-Side Fuzzy Matching | AxelBase</title>
  <meta name="description" content="How to safely validate usernames, comments, or messages against prohibited terms without ever exposing user data to a server." />
  <meta property="og:title" content="Private Blocklist Checking with Client-Side Fuzzy Matching | AxelBase" />
  <meta property="og:description" content="How to safely validate usernames, comments, or messages against prohibited terms without ever exposing user data to a server." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Private Blocklist Checking</p>
  </div>

  <article class="prose">
    <h1>Private Blocklist Checking with Client-Side Fuzzy Matching</h1>
    <p class="post-meta">Published: December 5, 2025</p>

    <p>Many platforms maintain internal blocklists of banned usernames, slurs, drug terms, or brand impersonations. Sending every user message to a server for checking creates serious privacy and legal risks. Client-side fuzzy checking solves this elegantly.</p>

    <p>You load the sensitive blocklist once (locally, encrypted if needed), then every new message is compared entirely in the browser. Nothing leaves the user’s device.</p>

    <h2>Common Scenarios</h2>
    <ul>
      <li>Preventing new account creation with variations of banned usernames</li>
      <li>Blocking coded drug sales language (“710 friendly”, “420”, etc.)</li>
      <li>Stopping brand impersonation (“PayPal-Support”, “Amazon Help”) </li>
      <li>Filtering harassment that uses spaces or symbols to bypass filters</li>
    </ul>

    <p>Partial Ratio shines here because banned terms are usually short and appear inside longer text. A score above 90% is almost always a hit, even with deliberate obfuscation.</p>

    <p>Because everything happens in the browser, compliance teams avoid storing or logging user content while still maintaining strong protection. This approach is now used by several privacy-focused chat apps and forums.</p>

    <p class="italic-note">Privacy and safety are not mutually exclusive when the right tools are used correctly.</p>
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