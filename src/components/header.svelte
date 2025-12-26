<script>
  import { buttonVariants } from '@/ui/button';
  import Github from '@/icons/github.svelte';
  import Linkedin from '@/icons/linkedin.svelte';
  import Download from '@/icons/download.svelte';
  import ModdeToggle from './modde-toggle.svelte';
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
</script>
<nav
  class="container sticky top-0 z-50 mb-1 flex w-full max-w-4xl items-center justify-between bg-neutral-100/80 py-4 backdrop-blur-md dark:bg-neutral-900/80"
>
  <a
    href="/"
    class="text-md flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100"
  >
    <div class="relative -ml-12 h-10 w-20">
      <img
        src="/images/logo-dark.png"
        alt="aaandrangom"
        class="absolute left-0 top-1/2 hidden h-10 -translate-y-1/2 origin-left scale-x-[5] scale-y-[3.5] dark:block"
      />
      <img
        src="/images/logo-light.png"
        alt="aaandrangom"
        class="absolute left-0 top-1/2 block h-10 -translate-y-1/2 origin-left scale-x-[5] scale-y-[3.5] dark:hidden"
      />
    </div>
  </a>
  <div class="flex items-center space-x-1">
    {#each SocialLinks as { name, url, icon, iconSize }, i}
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
</nav>