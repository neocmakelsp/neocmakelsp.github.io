<script lang="ts">
  import { faMessage } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<section class="slide grid reserve features_rev completionGrid" id="hover">
  <div class="textArea">
    <h1>Hover Support</h1>
    <p>
      Neocmakelsp support to use hover to get the information from builtin functions, packages,
      targets and so on. With the help of fileApi of cmake, it can get detailed information of
      compiling targets.
    </p>
  </div>
  <div class="icon">
    <FontAwesomeIcon icon={faMessage} size="4x" />
  </div>
</section>

<style>
  .completionGrid {
    background-color: #0d2e5f;
  }

  .textArea {
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #dddddd;
    gap: 2px;
    & p {
      font-size: 30px;
    }
    & h1 {
      text-align: center;
      font-size: 3em;
    }
  }
</style>
