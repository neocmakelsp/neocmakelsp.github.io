<script lang="ts">
  import Link from '$lib/components/LinkNoColor.svelte';
  import { faBookOpen, faHouse, faDownload } from '@fortawesome/free-solid-svg-icons';
  import { faGithub } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<header>
  <nav>
    <Link href="/" tooltip="Home">
      <FontAwesomeIcon icon={faHouse} class="icon" size="2x" />
    </Link>
    <Link href="#install" tooltip="Install">
      <FontAwesomeIcon icon={faDownload} class="icon" size="2x" />
    </Link>
    <Link href="https://neocmakelsp.github.io/docs" tooltip="documents">
      <FontAwesomeIcon icon={faBookOpen} class="icon" size="2x" />
    </Link>

    <Link href="https://github.com/neocmakelsp/neocmakelsp" tooltip="github">
      <FontAwesomeIcon icon={faGithub} class="icon" size="2x" />
    </Link>
  </nav>
</header>

<style>
  header {
    height: 5rem;
    z-index: 20;
    position: fixed;
    background-color: #0c2e4d;
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem;
  }

  nav {
    display: grid;
    grid-template-columns: repeat(4, 5em);
    justify-content: space-between;
    place-items: center;
    width: 100%;
    height: 100%;
  }
</style>
