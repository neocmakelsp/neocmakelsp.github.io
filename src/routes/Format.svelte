<script lang="ts">
  import { faPaintbrush } from '@fortawesome/free-solid-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
</script>

<section class="slide grid completionGrid" id="format">
  <div class="icon">
    <FontAwesomeIcon icon={faPaintbrush} size="4x" />
  </div>
  <div class="textArea">
    <h1>Format Support</h1>
    <div class="descriptionArea">
      <p>Neocmakelsp supports language server format. It can also be used as cli.</p>
      <p>
        It is a very simple format, will make the code looks better, but also reserves the place for
        you to adjust some details.
      </p>
      <p>
        You can also use extra format tools in neocmakelsp, with configuring the .neocmake.toml
        config file.
      </p>
    </div>
  </div>
</section>

<style>
  .completionGrid {
    /*background-color: #0d2e5f;*/
    background-color: #06204d;
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
  .descriptionArea {
    gap: 0px;
  }
</style>
