<script lang="ts">
  import { buttonVariants } from '@/ui/button';
  import Github from '@/icons/github.svelte';
  import Linkedin from '@/icons/linkedin.svelte';
  import Download from '@/icons/download.svelte';
  import ModdeToggle from './modde-toggle.svelte';

  let isMenuOpen = false;
  let menuContainer: HTMLDivElement;

  const SocialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aaandrangom',
      icon: Linkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/aaandrangom',
      icon: Github
    },
    {
      name: 'Download Resume',
      url: '/Anthony_Andrangom_Resume.pdf',
      icon: Download,
      iconSize: 22
    }
  ];

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  function handleClickOutside(event: MouseEvent) {
    if (menuContainer && !menuContainer.contains(event.target as Node) && isMenuOpen) {
      closeMenu();
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<nav
  class="container sticky top-0 z-50 mb-1 w-full max-w-4xl bg-neutral-100/80 py-4 backdrop-blur-md dark:bg-neutral-900/80"
>
  <div class="flex items-center justify-between">
    <a
      href="/"
      class="text-md flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100"
    >
      <div class="sm:w-18 relative -ml-8 h-10 w-16 sm:-ml-10 md:-ml-12 md:w-20">
        <img
          src="/images/logo-dark.png"
          alt="aaandrangom"
          class="absolute left-0 top-1/2 hidden h-10 origin-left -translate-y-1/2 scale-x-[4] scale-y-[3] dark:block sm:scale-x-[4.5] sm:scale-y-[3.2] md:scale-x-[5] md:scale-y-[3.5]"
        />
        <img
          src="/images/logo-light.png"
          alt="aaandrangom"
          class="absolute left-0 top-1/2 block h-10 origin-left -translate-y-1/2 scale-x-[4] scale-y-[3] dark:hidden sm:scale-x-[4.5] sm:scale-y-[3.2] md:scale-x-[5] md:scale-y-[3.5]"
        />
      </div>
    </a>

    <div class="hidden items-center space-x-1 md:flex">
      {#each SocialLinks as { name, url, icon, iconSize }}
        {@const SvelteComponent = icon}
        <a
          href={url}
          title={name}
          target="_blank"
          rel="noopener noreferrer"
          class={buttonVariants({
            variant: 'ghost',
            size: 'icon',
            class: 'opacity-80 transition-opacity duration-150 hover:opacity-100'
          })}
        >
          <SvelteComponent height={iconSize ? iconSize : 18} />
        </a>
      {/each}
      <ModdeToggle />
    </div>

    <div class="relative md:hidden" bind:this={menuContainer}>
      <button
        on:click|stopPropagation={toggleMenu}
        class="flex h-10 w-10 items-center justify-center rounded-md opacity-80 transition-opacity duration-150 hover:bg-neutral-200 hover:opacity-100 dark:hover:bg-neutral-800"
        aria-label="Toggle menu"
      >
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {#if isMenuOpen}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          {:else}
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          {/if}
        </svg>
      </button>

      {#if isMenuOpen}
        <div
          class="absolute right-0 top-12 flex flex-col rounded-lg border border-neutral-200 bg-neutral-100/95 p-1 shadow-lg backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-900/95"
        >
          {#each SocialLinks as { name, url, icon, iconSize }}
            {@const SvelteComponent = icon}
            <a
              href={url}
              title={name}
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeMenu}
              class={buttonVariants({
                variant: 'ghost',
                size: 'icon',
                class: 'opacity-80 transition-opacity duration-150 hover:opacity-100'
              })}
            >
              <SvelteComponent height={iconSize ? iconSize : 18} />
            </a>
          {/each}
          <ModdeToggle />
        </div>
      {/if}
    </div>
  </div>
</nav>
