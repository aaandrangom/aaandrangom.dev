<script lang="ts">
  // Sections:
  import About from '@/components/about.svelte';
  import Experience from '@/components/experience.svelte';
  import Projects from '@/components/featuredProjects.svelte';

  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Anthony Andrango - aaandrangom</title>
  <meta property="og:title" content="Anthony Andrango" />
  <meta property="og:description" content="Turning ideas into reality" />
  <meta name="image" property="og:image" content="https://res.cloudinary.com/dfg9b8dtx/image/upload/v1766774975/portfolio_f4hvn0.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
</svelte:head>

<div class="grid items-center gap-14 py-4 md:py-4">
  <About />
  <Projects />
  <Experience />
</div>
