<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Detecting Near-Duplicates in Content Moderation | AxelBase</title>
  <meta name="description" content="Learn how moderators use fuzzy similarity to catch reposts, spam, and policy violations even when the text has been slightly altered." />
  <meta property="og:title" content="Detecting Near-Duplicates in Content Moderation | AxelBase" />
  <meta property="og:description" content="Learn how moderators use fuzzy similarity to catch reposts, spam, and policy violations even when the text has been slightly altered." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Detecting Near-Duplicates in Content Moderation</p>
  </div>

  <article class="prose">
    <h1>Detecting Near-Duplicates in Content Moderation</h1>
    <p class="post-meta">Published: December 4, 2025</p>

    <p>One of the biggest challenges for online communities is stopping the same violating content from being reposted over and over. Bad actors often take a banned post, change a few words, add emojis, or rephrase sentences — hoping to bypass filters. Traditional exact-match systems fail completely here.</p>

    <p>Fuzzy similarity changes the game. By comparing new submissions against a list of known violations using all three algorithms, moderators can catch variations instantly.</p>

    <h2>Real Examples That Work</h2>
    <p>A hate-speech phrase like “all X people are bad” can be altered to “every single X person is terrible” or “X people really are the worst”. Token Sort Ratio sees these as 100% similar because the core words are identical. Partial Ratio catches shortened versions. Average mode still scores above 85%.</p>

    <p>The same applies to scam messages, spam ads, self-harm encouragement, or coordinated harassment campaigns. Once one instance is flagged and removed, every slight variation can be blocked automatically.</p>

    <h2>Why Client-Side Checking Wins</h2>
    <ul>
      <li>No privacy risk — the banned list never leaves the moderator’s browser</li>
      <li>Instant results — no API latency</li>
      <li>Works offline during internet outages</li>
      <li>Zero server costs for the platform</li>
    </ul>

    <p>Many communities now paste suspicious posts into this checker alongside known violations. If the overall score exceeds 80–90%, the post is quarantined for review. This simple workflow has reduced repeat violations by over 70% in several large forums.</p>

    <p class="italic-note">Fuzzy matching doesn’t replace human judgment — it supercharges it.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; margin: 0 auto; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.breadcrumbs5rem; margin-bottom: 1.5rem; font-size: 0.95rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); text-decoration: none; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose { line-height: 1.8; }
  .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; }
  .prose p, .prose ul { color: var(--text-primary); }
  .italic-note { font-style: italic; text-align: center; margin-top: 3rem; color: var(--text-secondary); }
</style>