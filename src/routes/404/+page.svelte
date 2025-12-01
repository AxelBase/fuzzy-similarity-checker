<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>404 – Page Not Found | AxelBase Fuzzy Similarity Checker</title>
  <meta name="description" content="The page you're looking for doesn't exist. Return to the fuzzy text comparison tool." />
  <meta property="og:title" content="404 – Page Not Found | AxelBase" />
  <meta property="og:description" content="Oops! This page doesn't exist. Go back to comparing text with full privacy." />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout text-center py-5">
  <div class="mb-5">
    <h1 class="display-1 fw-bold text-primary">404</h1>
    <p class="lead fs-3">Page Not Found</p>
  </div>

  <article class="prose mx-auto">
    <p>Sorry — the page you were looking for could not be found. It may have been moved, deleted, or you might have mistyped the URL.</p>

    <p>Don’t worry — the <strong>Fuzzy Similarity Checker</strong> is still here and ready to help you compare text privately and instantly.</p>

    <h2 class="mt-5">Where would you like to go?</h2>
    <div class="d-grid gap-3 d-md-flex justify-content-center mt-4">
      <a href="{base}/" class="btn btn-primary btn-lg px-5">
        Back to Home
      </a>
      <a href="{base}/blog" class="btn btn-outline-primary btn-lg px-5">
        Read the Blog
      </a>
    </div>

    <div class="mt-5">
      <h3>Quick Links</h3>
      <ul class="list-unstyled mt-3">
        <li><a href="{base}/">Fuzzy Similarity Checker</a></li>
        <li><a href="{base}/blog">Blog & Insights</a></li>
        <li><a href="{base}/privacy">Privacy Policy</a></li>
        <li><a href="{base}/terms">Terms & Conditions</a></li>
      </ul>
    </div>

    <p class="italic-note mt-5">
      <em>Still lost? Just head back home — your text stays private, always.</em>
    </p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding: 4rem 1rem;
    margin: 0 auto;
  }

  .prose {
    line-height: 1.8;
  }

  .prose a {
    color: var(--bs-primary);
    text-decoration: underline;
  }

  .prose a:hover {
    opacity: 0.8;
  }

  .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    font-size: 1.1rem;
  }
</style>