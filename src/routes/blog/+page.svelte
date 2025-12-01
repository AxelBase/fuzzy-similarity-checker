<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'What is Fuzzy String Matching?',
      description: 'An introduction to fuzzy similarity and why exact text matching isn’t enough in real-world applications.'
    },
    {
      href: '/blog/posts/post2',
      title: 'How the Ratio, Partial Ratio, and Token Sort Algorithms Work',
      description: 'Deep dive into the three core algorithms powering this checker — Levenshtein-based, subsequence, and word-order independent matching.'
    },
    {
      href: '/blog/posts/post3',
      title: 'When to Use “Average” vs “Highest Score” Mode',
      description: 'Understanding the difference between conservative (average) and optimistic (max) similarity scoring for different use cases.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Detecting Near-Duplicates in Content Moderation',
      description: 'How content platforms use fuzzy similarity to catch reposted, slightly edited, or paraphrased spam and violations.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Comparing User Input Against a Blocklist Securely',
      description: 'Why client-side fuzzy checking is essential for privacy when validating usernames, comments, or messages against prohibited terms.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Measuring Text Similarity in Plagiarism Detection',
      description: 'Real examples of how educators and platforms use fuzzy matching to identify suspected plagiarism while respecting student privacy.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Performance: 10,000 Characters in Under 100ms',
      description: 'How modern JavaScript and optimized algorithms make instant fuzzy comparison possible entirely in the browser — with benchmarks.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | AxelBase Fuzzy Similarity Checker</title>
  <meta name="description" content="Technical deep dives, use cases, and best practices for fuzzy text comparison — all 100% client-side and privacy-first." />
</svelte:head>

<div class="container py-5 blog-index">
  <header class="blog-header text-center mb-5">
    <h1><i class="bi bi-journal-text"></i> Blog: Fuzzy Insights</h1>
    <p class="subtitle lead col-lg-8 mx-auto">
      Technical articles, real-world applications, and deep dives into fuzzy string matching — all focused on privacy, speed, and accuracy.
      Powered by the open-source <a href="https://github.com/axelbase/fuzzy-similarity-checker" target="_blank" rel="noopener">AxelBase Fuzzy Similarity Checker</a>.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card h-100 text-decoration-none border-0 shadow-sm hover-shadow">
        <div class="card-body d-flex flex-column">
          <h2 class="post-title h5 fw-bold text-primary mb-3">{post.title}</h2>
          <p class="post-description text-muted flex-grow-1">{post.description}</p>
          <span class="read-more text-primary fw-semibold mt-2">
            Read Article →
          </span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    min-height: 80vh;
  }
  .post-card {
    transition: transform: translateY(0);
    transition: all 0.25s ease;
  }
  .post-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
  }
  .read-more {
    opacity: 0.9;
  }
  .post-card:hover .read-more {
    opacity: 1;
    transform: translateX(6px);
  }
  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 2rem;
  }
</style>