<script lang="ts">
  import { faComment } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<section class="slide grid completionGrid" id="completion">
  <div class="icon">
    <FontAwesomeIcon icon={faComment} size="4x" />
  </div>
  <div class="textArea">
    <h1>Completion, Jump and Reference Support</h1>
    <div class="descriptionArea">
      <p>
        Support completing multi things, including package names, builtin commands, builtin modules,
        module path and etc. Also we have snippet support.
      </p>
      <p>Support jumping to files, jumping to sub directories and jumping to packages.</p>
    </div>
  </div>
</section>

<style>
  .completionGrid {
    /*background-color: #0d2e5f;*/
    background-color: #0c2e4d;
  }

  .textArea {
    padding: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #dddddd;
    gap: 2px;
    & h1 {
      text-align: center;
      font-size: 3em;
      @media screen and (max-width: 600px) {
        font-size: 2em;
      }
    }
  }
  .descriptionArea {
    gap: 0px;
    & p {
      font-size: 2em;
      @media screen and (max-width: 600px) {
        font-size: 1.5em;
      }
    }
  }
</style>
