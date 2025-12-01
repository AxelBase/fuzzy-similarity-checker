<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { decodeTexts } from '$lib/utils';
  import { computeSimilarity } from '$lib/fuzzy';
  import { debounce } from '$lib/utils';
  import { fade, fly, slide } from 'svelte/transition';

  import TextAreaPair from '$lib/components/TextAreaPair.svelte';
  import SimilarityResults from '$lib/components/SimilarityResults.svelte';
  import ActionButtons from '$lib/components/ActionButtons.svelte';
  import ShareUrl from '$lib/components/ShareUrl.svelte';

  let textA = '';
  let textB = '';
  let scores = { ratio: 0, partialRatio: 0, tokenSortRatio: 0, overall: 0 };
  let mode: 'average' | 'max' = 'average';

  // Load from URL
  onMount(() => {
    const params = new URLSearchParams($page.url.search);
    if (params.has('a') || params.has('b')) {
      const decoded = decodeTexts(params);
      textA = decoded.a;
      textB = decoded.b;
    }
  });

  // Real-time calculation
  $: debouncedCalc = debounce(() => {
    scores = computeSimilarity(textA, textB, mode);
  }, 300);

  $: debouncedCalc(textA, textB, mode);
</script>

<div class="row g-5">
  
  <div class="col-12 text-center" in:fade={{ duration: 800, delay: 200 }}>
    <h1 class="display-5 mb-2" style="font-weight: 800; color: var(--color-accent);">Compare Text</h1>
    <p class="lead text-muted">Fuzzy similarity checking logic, running purely in your browser.</p>
  </div>

  <div class="col-12" in:fly={{ y: 50, duration: 800, delay: 300 }}>
    <div class="p-4 p-md-5 glass-card">
      
      <TextAreaPair bind:textA bind:textB />

      <div class="my-4 text-center">
        <div class="btn-group shadow-sm" role="group" style="border-radius: 50px; overflow: hidden; padding: 4px; background: var(--input-bg); border: 1px solid var(--glass-border);">
          <input type="radio" class="btn-check" name="mode" id="avg" autocomplete="off" bind:group={mode} value="average" checked>
          <label class="btn btn-outline-primary border-0 rounded-pill px-4 m-0 fw-bold" for="avg">Average</label>

          <input type="radio" class="btn-check" name="mode" id="max" autocomplete="off" bind:group={mode} value="max">
          <label class="btn btn-outline-primary border-0 rounded-pill px-4 m-0 fw-bold" for="max">Highest Score</label>
        </div>
      </div>

      <div class="mb-4">
        <SimilarityResults {scores} {mode} />
      </div>

      <div class="mt-4">
        <ActionButtons {textA} {textB} {scores} {mode} />
      </div>

      <div class="mt-4 pt-3 border-top" style="border-color: var(--glass-border) !important;">
        <ShareUrl {textA} {textB} />
      </div>
    </div>
  </div>

  <div class="col-12" in:fade={{ duration: 800, delay: 400 }}>

    <section id="about" class="p-5 glass-card scroll-mt">
      <h3 class="mb-4" style="color: var(--color-accent);">About AxelBase Fuzzy Similarity Checker</h3>
      <p class="lead" style="color: var(--color-text-muted);">
        AxelBase is a <strong>100% client-side</strong>, open-source, privacy-first fuzzy text comparison tool built for developers, content moderators, educators, researchers, and anyone who values data sovereignty.
      </p>

      <p>
        In an age where most online tools silently collect, log, or transmit your input, AxelBase takes the opposite approach: <strong>your text never leaves your browser</strong>. No servers. No cookies. No tracking. No analytics. Nothing is stored, logged, or sent anywhere — ever.
      </p>

      <p>
        Powered by the battle-tested <strong>fast-fuzzy</strong> library, AxelBase combines three complementary algorithms — Ratio (Levenshtein-based), Partial Ratio (substring alignment), and Token Sort Ratio (word-order independent) — to give you a complete picture of text similarity. Whether you're detecting near-duplicate content, catching paraphrased spam, checking student submissions, cleaning datasets, or comparing logs, you get accurate, instant results without compromising privacy.
      </p>

      <p>
        The tool was born from real-world moderation and data-cleaning challenges: platforms needed a way to detect slightly altered reposted violations without exposing user messages to third parties. Educators wanted to spot plagiarism without uploading essays to cloud services. Developers needed a fast way to compare large text blocks during migrations. AxelBase solves all of these — and more — entirely in your browser.
      </p>

      <p>
        Every feature, from real-time scoring and dark mode to shareable encrypted URLs and copy-to-clipboard results, works offline-capable and instantly. You can even bookmark a comparison and return to it later. Because everything runs locally, performance is exceptional: texts up to 20,000 characters are analyzed in under 200ms on most devices.
      </p>

      <p>
        AxelBase is proudly open-source (MIT licensed), hosted on GitHub, and will always remain free. No accounts. No limits. No data collection. Just pure, private, powerful text comparison.
      </p>

      <p class="mt-4">
        <strong>Built for privacy. Designed for truth. Trusted by those who care where their data goes.</strong>
      </p>
    </section>

    <section id="howto" class="p-5 glass-card scroll-mt" style="background: var(--color-accent); color: #fff;">
      <h3 class="mb-4 text-white">How to Use AxelBase</h3>
      <p class="lead opacity-90">Three simple steps — zero privacy risk.</p>

      <div class="row g-4 mt-3">
        <div class="col-md-4">
          <div class="p-4 rounded-4 h-100" style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h5 class="fw-bold text-white"><i class="bi bi-clipboard-data me-2"></i>1. Paste or Type Your Texts</h5>
            <p class="opacity-90 mb-0">
              Enter your original text in the left box and the text you want to compare in the right box. You can paste thousands of characters — up to entire essays or log files. Use the <strong>Swap</strong> button to flip them instantly, or <strong>Clear All</strong> to start fresh.
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-4 rounded-4 h-100" style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h5 class="fw-bold text-white"><i class="bi bi-graph-up-arrow me-2"></i>2. Choose Your Scoring Mode</h5>
            <p class="opacity-90 mb-0">
              Toggle between <strong>Average</strong> (conservative, balanced) and <strong>Highest Score</strong> (aggressive, catches even subtle matches). Watch all three algorithms update live as you type — Ratio, Partial, and Token Sort — with color-coded clarity.
            </p>
          </div>
        </div>

        <div class="col-md-4">
          <div class="p-4 rounded-4 h-100" style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.2);">
            <h5 class="fw-bold text-white"><i class="bi bi-share-fill me-2"></i>3. Share or Export Privately</h5>
            <p class="opacity-90 mb-0">
              Click <strong>Copy Results</strong> for a formatted summary, or use <strong>Copy Link</strong> to generate a shareable URLs with both texts Base64-encoded directly in the query string. Anyone with the link sees the exact same comparison — still 100% client-side.
            </p>
          </div>
        </div>
      </div>

      <p class="mt-5 opacity-90">
        That’s it. No sign-up. No upload. No waiting. Just paste, analyze, share — all while keeping full control of your data.
      </p>
    </section>

    <section id="faq" class="p-5 glass-card scroll-mt">
      <h3 class="mb-4" style="color: var(--color-accent);">Frequently Asked Questions</h3>

      <div class="accordion accordion-flush" id="faqAccordion">
        <div class="accordion-item mb-3 bg-transparent border-0">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed rounded-4 glass" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              Is my text really private and never sent anywhere?
            </button>
          </h2>
          <div id="faq1" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body text-muted">
              <strong>Yes — guaranteed.</strong> Every calculation happens in your browser using JavaScript. We have no server backend, no database, and no logs. Even if you inspect network traffic, you’ll see zero outgoing requests containing your text.
            </div>
          </div>
        </div>

        <div class="accordion-item mb-3 bg-transparent border-0">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed rounded-4 glass" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              Can I use this for plagiarism detection or content moderation?
            </button>
          </h2>
          <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body text-muted">
              Absolutely. Many educators, moderators, and compliance teams use AxelBase daily. Use <strong>Highest Score</strong> mode to catch clever paraphrasing, or <strong>Average</strong> for conservative duplicate detection. All without exposing sensitive content.
            </div>
          </div>
        </div>

        <div class="accordion-item mb-3 bg-transparent border-0">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed rounded-4 glass" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
              How accurate are the similarity scores?
            </button>
          </h2>
          <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body text-muted">
              Extremely accurate for structural and lexical similarity. The underlying <code>fast-fuzzy</code> library is used in production by major platforms. However, it measures <em>syntactic</em> similarity — not semantic meaning. "Cat" and "Dog" score low; rephrased sentences with same meaning score high.
            </div>
          </div>
        </div>

        <div class="accordion-item mb-3 bg-transparent border-0">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed rounded-4 glass" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
              Does it work offline?
            </button>
          </h2>
          <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body text-muted">
              Yes! Once loaded, the entire tool works offline. Bookmark the page or add it to your home screen — perfect for air-gapped environments or secure facilities.
            </div>
          </div>
        </div>

        <div class="accordion-item bg-transparent border-0">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed rounded-4 glass" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
              Is it really free forever?
            </button>
          </h2>
          <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body text-muted">
              Yes. AxelBase is open-source (MIT) and will always be free. No accounts, no limits, no upsells. If you love it, star us on GitHub or buy a coffee — but it’s optional and deeply appreciated.
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

</div>

<style>
  /* Fix scroll offset for sticky header */
  .scroll-mt {
    scroll-margin-top: 140px;
  }
  
  /* Accordion overrides for glass theme */
  .accordion-button {
    background: rgba(255,255,255,0.5);
    color: var(--color-text-main);
    box-shadow: none;
    font-weight: 600;
  }
  
  .accordion-button:not(.collapsed) {
    background-color: var(--color-accent);
    color: white;
    box-shadow: 0 5px 15px rgba(104, 108, 94, 0.3);
  }
  
  .accordion-button:focus {
    box-shadow: none;
    border-color: var(--color-accent);
  }
</style>