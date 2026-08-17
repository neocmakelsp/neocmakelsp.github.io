<script lang="ts">
  import { faAt } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<section class="slide grid reserve features_rev completionGrid" id="hover">
  <div class="textArea">
    <h1>Gammar Check and Fix Action</h1>
    <p>
      It supports to find gammar error in a cmake file. It also support outer lint projects, you can
      config them in .neocmake.toml. It also supports to fix warning of <span>too long line</span>
    </p>
  </div>

  <div class="icon">
    <FontAwesomeIcon icon={faAt} size="4x" />
  </div>
</section>

<style>
  .completionGrid {
    background-color: #0d3e5f;
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
    & span {
      background: #0d2e4f;
      padding: 2px 4px;
      border-radius: 4px;
    }
  }
</style>
