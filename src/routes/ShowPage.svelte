<script lang="ts">
  import Link from '$lib/components/Link.svelte';
  import ShowVideo from '$lib/assets/neocmakelsp.mp4';
</script>

<section class="slide grid balance showGrid" id="mainTitle">
  <div class="textArea">
    <h1 class="title">neocmakelsp</h1>
    <p class="description">
      Another lsp for cmake made with rust powered by tower-lsp with lots of features. Neocmaklsp
      use the <Link href="https://microsoft.github.io/language-server-protocol/">
        Language Server Protocol
      </Link>
      to provide variouse features of cmake, make it easier for developing c++ programs.
    </p>
  </div>
  <div class="showCaseDiv">
    <video autoplay loop muted class="showCase">
      <source src={ShowVideo} type="video/mp4" />
    </video>
  </div>
</section>

<style>
  .showGrid {
    background-color: black;
    & h1 {
      color: white;
    }
    & p {
      color: white;
    }
  }

  .description {
    padding: 60px;
    font-size: 32px;
    margin-top: 1px;
    @media screen and (max-width: 700px) {
      font-size: 3em;
    }
    @media screen and (max-width: 600px) {
      font-size: 1.7em;
    }
  }

  .textArea {
    align-items: center;
  }
  .title {
    text-align: center;
    font-size: 4em;
    font-weight: 500;
    @media screen and (max-width: 700px) {
      font-size: 4em;
    }
    @media screen and (max-width: 600px) {
      font-size: 2.5em;
    }
  }
  .showCaseDiv {
    display: flex;
    justify-content: center;
  }
  .showCase {
    width: 98%;
    @media screen and (max-width: 1300px) {
      width: 60%;
    }
    @media screen and (max-width: 900px) {
      width: 80%;
    }
  }
</style>
