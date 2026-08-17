<script lang="ts">
  import { faHighlighter } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<section class="slide grid completionGrid" id="highlight">
  <div class="icon">
    <FontAwesomeIcon icon={faHighlighter} size="4x" />
  </div>
  <div class="textArea">
    <h1>Highlight Support</h1>
    <p>
      Neocmakelsp supports semantic highlighting, powered by tree-sitter. On vscode, it will
      performance better than textMate
    </p>
  </div>
</section>

<style>
  .completionGrid {
    /*background-color: #0d2e5f;*/
    background-color: #05204d;
  }

  .textArea {
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #dddddd;
    gap: 2px;

    & p {
      font-size: 2em;
      @media screen and (max-width: 600px) {
        font-size: 1.5em;
      }
    }
    & h1 {
      text-align: center;
      font-size: 3em;
      @media screen and (max-width: 600px) {
        font-size: 2em;
      }
    }
  }
</style>
