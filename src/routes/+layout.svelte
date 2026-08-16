<script lang="ts">
  import favicon from '$lib/assets/favicon.ico';
  import Header from './Header.svelte';
  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>neocmakelsp</title>
</svelte:head>

<Header />
{@render children()}
