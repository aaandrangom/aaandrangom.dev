<script lang="ts">
  import About from '@/components/about.svelte';
  import Experience from '@/components/experience.svelte';
  import Projects from '@/components/featuredProjects.svelte';

  interface Props {
    data: any;
  }

  let { data }: Props = $props();
</script>

<div class="grid items-center gap-14 py-4 md:py-4">
  <About />
  <Projects />
  <Experience />
</div>