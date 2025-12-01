<script lang="ts">
  import '../app.css';
  import { base } from '$app/paths';
  import { page } from '$app/stores';
  import { slide, fade } from 'svelte/transition';
  import { onMount } from 'svelte';

  // --- Buy Me A Coffee Logic ---
  const paypalUsername = 'AxelLab427';
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }

  // --- Theme Toggle Logic ---
  let theme = 'light';
  
  onMount(() => {
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme = savedTheme;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    }
    document.body.setAttribute('data-bs-theme', theme);
  });

  function toggleTheme() {
    theme = theme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }
</script>

<header class="fixed-top p-3 w-100" style="pointer-events: none; z-index: 1040;">
  <nav class="container glass rounded-pill px-4 py-2 d-flex justify-content-between align-items-center shadow-sm" style="pointer-events: auto;">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center gap-2 logo-group text-decoration-none">
        <div class="logo-wrapper">
          <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-brand-logo" />
        </div>
        <span class="fw-bold fs-5 brand-text">AxelBase</span>
      </a>

      <div class="position-relative ms-2 d-none d-sm-block" use:clickOutside on:click_outside={closeDropdown}>
        <button 
          class="btn btn-coffee d-flex align-items-center gap-2" 
          on:click={toggleDropdown}
          aria-label="Support this project"
        >
          <i class="bi bi-cup-hot-fill coffee-icon"></i>
          <span class="d-none d-md-inline">Buy me a coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="dropdown-menu-custom glass" transition:slide={{ duration: 250 }}>
            <div class="d-flex flex-column gap-1">
              {#each donationAmounts as amount}
                <a 
                  href="https://paypal.me/{paypalUsername}/{amount}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  on:click={closeDropdown}
                  class="donation-link"
                >
                  ${amount}
                </a>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    </div>

    <div class="d-flex align-items-center gap-3">
      <ul class="nav d-none d-lg-flex align-items-center gap-1 m-0">
        <li class="nav-item"><a class="nav-link-custom" href="{base}/" class:active={$page.url.pathname === '/' && !$page.url.hash}>Home</a></li>
        <li class="nav-item"><a class="nav-link-custom" href="{base}/#about">About</a></li>
        <li class="nav-item"><a class="nav-link-custom" href="{base}/#howto">How to</a></li>
        <li class="nav-item"><a class="nav-link-custom" href="{base}/#faq">FAQ</a></li>
        <li class="nav-item ms-2">
          <a class="btn btn-primary rounded-pill px-4 fw-semibold" href="{base}/blog">Blog</a>
        </li>
      </ul>

      <button 
        class="btn btn-outline-secondary btn-theme-toggle" 
        on:click={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {#if theme === 'dark'}
          <i class="bi bi-sun-fill" in:fade></i>
        {:else}
          <i class="bi bi-moon-stars-fill" in:fade></i>
        {/if}
      </button>

      <button 
        class="navbar-toggler d-lg-none border-0 bg-transparent" 
        type="button" 
        aria-label="Toggle navigation menu"
      >
        <i class="bi bi-list fs-2" style="color: var(--color-accent);"></i>
      </button>
    </div>

  </nav>
</header>

<main class="flex-grow-1">
  <div class="container container-main mx-auto">
    <slot />
  </div>
</main>

<footer class="relative glass border-top py-3 mt-5" style="z-index: 1030;">
  <div class="container d-flex flex-column flex-sm-row justify-content-between align-items-center small text-muted">
    <span>&copy; {new Date().getFullYear()} AxelBase Fuzzy Similarity Checker</span>
    <div class="d-flex gap-3 mt-1 mt-sm-0">
      <a href="{base}/privacy" class="footer-link">Privacy</a>
      <a href="{base}/terms" class="footer-link">Terms</a>
    </div>
  </div>
</footer>

<style>
  .navbar-brand-logo { 
    height: 32px; 
    width: auto; 
    transition: transform 0.3s ease; 
  }
  
  .brand-text {
    color: var(--color-accent);
    letter-spacing: -0.5px;
  }
  
  .logo-group:hover .navbar-brand-logo { 
    transform: rotate(10deg) scale(1.1); 
  }
  
  /* Nav Link Styling */
  .nav-link-custom { 
    position: relative; 
    padding: 0.5rem 1rem; 
    color: var(--color-text-muted); 
    font-weight: 600; 
    transition: color 0.3s; 
  }
  
  .nav-link-custom.active,
  .nav-link-custom:hover { 
    color: var(--color-accent); 
  }
  
  /* Underline Animation */
  .nav-link-custom::after { 
    content: ''; 
    position: absolute; 
    width: 0; 
    height: 3px; 
    bottom: 5px; 
    left: 50%; 
    background-color: var(--color-accent); 
    transition: all 0.3s ease-in-out; 
    transform: translateX(-50%); 
    border-radius: 2px; 
  }
  
  .nav-link-custom:hover::after,
  .nav-link-custom.active::after { 
    width: 60%; 
  }

  /* Theme Toggle Button */
  .btn-theme-toggle {
    width: 40px;
    height: 40px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--color-text-main);
    border: 1px solid var(--glass-border);
  }
  .btn-theme-toggle:hover {
    background: var(--glass-border);
    transform: rotate(15deg);
  }

  /* Coffee Button */
  .btn-coffee { 
    background: #FFDD00; 
    color: #3d3d3d; 
    font-weight: 700; 
    border: none; 
    padding: 0.4rem 1.2rem; 
    box-shadow: 0 4px 10px rgba(255,221,0,0.3); 
    font-size: 0.9rem; 
  }
  
  .btn-coffee:hover { 
    background: #ffe54c; 
    transform: translateY(-2px); 
    box-shadow: 0 6px 15px rgba(255,221,0,0.4) !important; 
  }
  
  .coffee-icon { 
    animation: steam 2s infinite ease-out; 
  }

  /* Dropdown */
  .dropdown-menu-custom { 
    position: absolute; 
    top: 120%; 
    left: 0; 
    min-width: 120px; 
    padding: 0.5rem; 
    border-radius: 16px; 
    z-index: 1050; 
    display: flex; 
    flex-direction: column; 
    gap: 4px;
  }
  
  .donation-link { 
    display: block; 
    padding: 8px; 
    text-align: center; 
    border-radius: 10px; 
    font-weight: bold; 
    color: var(--color-accent); 
    background: rgba(255,255,255,0.4); 
    transition: all 0.2s; 
  }
  
  .donation-link:hover { 
    background: var(--color-accent); 
    color: white; 
    transform: scale(1.05); 
  }

  .footer-link { 
    color: var(--color-text-muted); 
    transition: color 0.2s; 
  }
  .footer-link:hover { 
    color: var(--color-accent); 
    text-decoration: underline; 
  }

  @keyframes steam { 
    0% { opacity: 0.8; transform: translateY(0); } 
    100% { opacity: 0; transform: translateY(-5px); } 
  }
</style>