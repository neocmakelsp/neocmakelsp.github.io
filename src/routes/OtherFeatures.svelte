<script lang="ts">
  import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<section class="slide grid reserve features_rev completionGrid" id="otherfeatures">
  <div class="textArea">
    <h1>Other Features</h1>
    <div class="descriptionArea">
      <p>Neocmakelsp also supports document symbols, document link, rename and etc.</p>
      <p>It is also a cli tool which can be used as format stuff, target starter and etc.</p>
    </div>
  </div>

  <div class="icon">
    <FontAwesomeIcon icon={faExternalLink} size="4x" />
  </div>
</section>

<style>
  .completionGrid {
    background-color: #0f3e5f;
  }
  .descriptionArea {
    gap: 0px;
    & p {
      font-size: 30px;
    }
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
