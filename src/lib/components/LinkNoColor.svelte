<script lang="ts">
  import type { Snippet } from 'svelte';

  type Link = {
    href: string;
    tooltip: string;
    children?: Snippet;
  };
  let { children, href, tooltip }: Link = $props();
</script>

<a {href}>
  <span class="link">
    {@render children?.()}
    <span class="tooltiptext">
      {tooltip}
    </span>
  </span>
</a>

<style>
  .link {
    color: white;
    position: relative;
    display: inline-block;
    & .tooltiptext {
      visibility: hidden;
      background-color: #222222;
      font-size: 20px;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 5px 5px;

      /* Position the tooltip */
      position: absolute;
      z-index: 1;
      top: 100%;
      left: -10%;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    &:hover .tooltiptext {
      visibility: visible;
    }
  }
</style>
