<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | AxelBase Fuzzy Similarity Checker</title>
  <meta name="description" content="We collect zero data. Your text never leaves your browser. Full privacy policy for the AxelBase Fuzzy Similarity Checker." />
  <meta property="og:title" content="Privacy Policy | AxelBase Fuzzy Similarity Checker" />
  <meta property="og:description" content="100% client-side tool. No tracking, no cookies, no servers. Your text is never sent anywhere." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: December 1, 2025</p>

    <p>At <strong>AxelBase</strong>, your privacy is not just a feature — it is the foundation of the Fuzzy Similarity Checker. This tool was built from the ground up to ensure <strong>no text you enter ever leaves your device</strong>.</p>

    <h2>We Collect Absolutely Nothing</h2>
    <p>The AxelBase Fuzzy Similarity Checker runs <strong>100% client-side</strong> in your browser. This means:</p>
    <ul>
      <li><strong>No personal data</strong> — names, emails, IP addresses, or device info</li>
      <li><strong>No text content</strong> — everything you paste or type is processed locally and immediately discarded</li>
      <li><strong>No analytics</strong> — we do not use Google Analytics, Plausible, or any tracking scripts</li>
      <li><strong>No cookies</strong> — not even session cookies</li>
      <li><strong>No server logs</strong> — there is no backend to log anything</li>
    </ul>

    <h2>How Your Data Stays Private</h2>
    <p>All fuzzy matching algorithms (Ratio, Partial Ratio, Token Sort) execute directly in your browser using lightweight JavaScript. When you close or refresh the page, all input is permanently erased from memory. Even if someone gained full access to our hosting, they would find nothing — because nothing is ever stored or transmitted.</p>

    <h2>Third-Party Services</h2>
    <p>We use only trusted CDNs (jsDelivr) to deliver Bootstrap and icons. These requests contain no user data, no identifiers, and no text content. No advertising, no social media pixels, no fingerprinting scripts.</p>

    <h2>Local Storage (Optional & Limited)</h2>
    <p>The only data ever saved is your <strong>theme preference</strong> (light/dark mode), stored in your browser’s localStorage. This is optional, never shared, and deleted with one click via your browser settings.</p>

    <h2>Compliance by Design</h2>
    <p>Because we collect zero personal data, the tool is inherently compliant with <strong>GDPR</strong>, <strong>CCPA</strong>, <strong>LGPD</strong>, and all global privacy regulations. No consent banners are needed — there is nothing to consent to.</p>

    <h2>Children’s Privacy</h2>
    <p>This tool is safe and appropriate for users of all ages. No data collection occurs at any time.</p>

    <h2>Changes to This Policy</h2>
    <p>Any future changes will be posted here with an updated effective date. Given our no-data model, material changes are extremely unlikely.</p>

    <h2>Contact</h2>
    <p>Questions? Reach us anytime via GitHub Issues at the official repository.</p>

    <p class="italic-note"><strong>Your text. Your device. Your privacy — guaranteed.</strong></p>
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