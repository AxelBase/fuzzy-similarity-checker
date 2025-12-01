<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | AxelBase Fuzzy Similarity Checker</title>
  <meta name="description" content="Terms of use for the free, open-source, client-side AxelBase Fuzzy Similarity Checker." />
  <meta property="og:title" content="Terms and Conditions | AxelBase" />
  <meta property="og:description" content="Free to use, no warranty, no liability. Simple and clear terms for a privacy-first tool." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>
    <p class="post-meta">Last Updated: December 1, 2025</p>

    <p>By using the <strong>AxelBase Fuzzy Similarity Checker</strong> ("the Tool"), you agree to these Terms and Conditions. The Tool is provided free of charge on an <strong>as-is</strong> and <strong>as-available</strong> basis.</p>

    <h2>1. Nature of the Tool</h2>
    <p>This is a <strong>100% client-side web application</strong>. All processing occurs in your browser. We do not host, store, transmit, or log any text you enter. You are solely responsible for the content you process.</p>

    <h2>2. License to Use</h2>
    <p>You are granted a worldwide, non-exclusive, royalty-free license to use the Tool for personal, educational, or commercial purposes. You may freely share the public URL with others.</p>

    <h2>3. No Warranty</h2>
    <p>The Tool is provided <strong>without warranty of any kind</strong>, express or implied, including but not limited to accuracy, reliability, or fitness for a particular purpose. Similarity scores are algorithmic estimates and may not reflect actual semantic meaning.</p>

    <h2>4. Limitation of Liability</h2>
    <p>In no event shall AxelBase, its creators, or contributors be liable for any direct, indirect, incidental, special, or consequential damages arising from:</p>
    <ul>
      <li>Incorrect similarity results</li>
      <li>Loss of data on your device</li>
      <li>Misuse of the Tool for unlawful purposes</li>
      <li>Decisions made based on the Tool’s output</li>
    </ul>

    <h2>5. Acceptable Use</h2>
    <p>You agree not to use the Tool to:</p>
    <ul>
      <li>Process illegal content</li>
      <li>Attempt to reverse-engineer or extract proprietary algorithms beyond the open-source code</li>
      <li>Overload or attack the hosting infrastructure</li>
    </ul>

    <h2>6. Intellectual Property</h2>
    <p>The source code is open-source under the MIT License. The name “AxelBase” and associated branding are property of their respective owners.</p>

    <h2>7. Termination</h2>
    <p>We reserve the right to suspend or terminate access to the Tool at any time without notice, though we have no current plans to do so.</p>

    <h2>8. Governing Law</h2>
    <p>These terms shall be governed by the laws of the Republic of Cyprus, without regard to conflict of law principles.</p>

    <h2>9. Changes to Terms</h2>
    <p>We may modify these terms at any time. Continued use after changes constitutes acceptance.</p>

    <p class="italic-note"><strong>Simple, transparent, and privacy-first — just like the tool itself.</strong></p>
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
  .italic-note { font-style: italic; text-align: center; margin-top: 3rem; color: var(--text-secondary); font-size: 1.1rem; }
</style>