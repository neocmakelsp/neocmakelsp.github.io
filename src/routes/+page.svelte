<script lang="ts">
  import './shared.css';
  import ShowPage from './ShowPage.svelte';
  import Completion from './Completion.svelte';
  import Hover from './Hover.svelte';
  import Highlight from './Highlight.svelte';
  import Lint from './Lint.svelte';
  import Format from './Format.svelte';
  import OtherFeatures from './OtherFeatures.svelte';
  import Install from './Install.svelte';
</script>

<main class="presentation">
  <ShowPage />
  <Completion />
  <Hover />
  <Highlight />
  <Lint />
  <Format />
  <OtherFeatures />
  <Install />
</main>
