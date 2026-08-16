<script lang="ts">
  import Vscode from '$lib/assets/vscode.svg';
  import Neovim from '$lib/assets/neovim.svg';
  import Link from '$lib/components/Link.svelte';
  import { onMount } from 'svelte';
  const tabs: {
    [key: string]: { button: HTMLButtonElement; content: HTMLDivElement };
  } = {};

  const setTabActive = (tab: string) => {
    Object.values(tabs).forEach((tab) => {
      tab.button.classList.remove('active');
      tab.content.classList.remove('active');
    });
    tabs[tab].button.classList.add('active');
    tabs[tab].content.classList.add('active');
  };
  function listenOnButton() {
    const installButtons = document.querySelectorAll<HTMLButtonElement>(
      '.install-tabs > .buttons > button'
    );
    for (const button of installButtons) {
      const tab = document.querySelector<HTMLDivElement>(
        `#install > .install-tabs > .content #${button.value}`
      );

      if (!tab) {
        throw new Error(`Could not find tab: ${button.value}`);
      }

      tabs[button.value] = { button, content: tab };

      button.addEventListener('mouseover', () => {
        setTabActive(button.value);
      });

      button.addEventListener('click', () => {
        setTabActive(button.value);
        window.location.hash = `#${button.value}`;
        tab.scrollIntoView();
      });

      tab.addEventListener('focusin', () => {
        setTabActive(button.value);
        tab.scrollIntoView();
      });
    }

    // If URL is targeting a specific install method, set it as active and scroll to it.
    const onHashChange = () => {
      const target = window.location.hash;
      if (target) {
        const tabName = target.replace('#', '');
        const tab = document.querySelector(`#install .tab-content #${tabName}`);
        if (tab) {
          setTabActive(tabName);
          //tabs[tabName].content?.scrollIntoView();
        }
      }
    };

    onHashChange();
    window.addEventListener('hashchange', onHashChange);
  }
  onMount(listenOnButton);
</script>

<section class="slide install" id="install">
  <h1 class="title">Install for ...</h1>
  <div class="install-tabs">
    <div class="buttons">
      <button value="vscode-install" class="active vscode">
        <img src={Vscode} alt="vscode" />
      </button>
      <button value="neovim-install" class="neovim">
        <img src={Neovim} alt="neovim" />
      </button>
    </div>
    <div class="content">
      <div id="vscode-install" class="active">
        <h3>Visual Studio Code</h3>
        <p>
          Install the <Link href="https://open-vsx.org/extension/Decodetalkers/neocmakelsp-vscode">
            neocmakelsp-vscode
          </Link> extension to get up and running as fast as possible
        </p>
        <div class="instructions">
          <ol>
            <li>Search for "neocmakelsp-vscode" in the extension marketplace.</li>
            <li>Download and install the extension.</li>
            <li>That's it! It's that easy! Happy Coding!</li>
          </ol>
        </div>
      </div>
      <div id="neovim-install">
        <h3>Visual Studio Code</h3>
        <p></p>
        <div class="instructions">
          <ol>
            <li>
              Install neocmakelsp
              <ol>
                <li>
                  From package manager
                  <ul>
                    <li>
                      Scoop: <code>scoop install neocmakelsp</code>
                    </li>
                    <li>
                      Homebrew: <code>brew install neocmakelsp</code>
                    </li>
                    <li>
                      Macports: <code>sudo port install neocmakelsp</code>
                    </li>
                    <li>
                      mise-en-place: <code>mise use aqua:LuaLS/lua-language-server</code>
                    </li>
                  </ul>
                </li>
                <li>
                  Build from stratch
                  <ul>
                    <li>
                      Cargo: <code>cargo install neocmakelsp</code>
                    </li>
                  </ul>
                </li>
                <li>
                  Install from aur (Arch User Repository): <code>paru -S neocmakelsp </code>
                </li>
              </ol>
            </li>
            <li>
              See <Link href="https://neovim.io/doc/user/lsp.html#lsp-quickstart"
                >Neovim's quickstart guide for neocmakelsp</Link
              >
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .title {
    color: white;
  }

  .install {
    gap: 20px;
    scroll-snap-align: start;
    flex-direction: column;
    background-color: #071521;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .install-tabs {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    .buttons {
      display: grid;
      grid-template-columns: repeat(2, 10em);
      justify-content: space-between;
      place-items: center;
      width: 46%;
      height: 20%;
      z-index: 1;

      button {
        border: none;
        aspect-ratio: 1;
        border-radius: 99em;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        height: 50%;
        & img {
          width: 80%;
        }
        &::before {
          content: '';
          position: absolute;
          z-index: -2;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          border-radius: 99em;
          background-color: var(--brand-primary);
          transition: opacity ease-in-out 0.5s;
          opacity: 0;
          filter: blur(0.3em);
        }

        &.active::before {
          opacity: 1;
        }

        &::after {
          content: '';
          position: absolute;
          z-index: -1;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
          border-radius: 20%;
          background-color: var(--brand-primary);
          transition: opacity ease-in-out 0.5s;
          opacity: 0;
          filter: brightness(130%) hue-rotate(30deg) blur(10px);
          animation: spin 3s infinite both linear;
        }

        &.active::after {
          opacity: 0.5;
        }

        &.active::after {
          opacity: 0.5;
        }

        &:hover {
          cursor: pointer;
        }

        &.vscode {
          --brand-primary: #23a9f2;
        }

        &.neovim {
          --brand-primary: #78e027;
        }
      }
    }
    .content {
      margin: 0.5em auto auto auto;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
      color: white;

      & > div {
        max-width: 1000px;
        pointer-events: none;
        height: 100%;
        overflow: auto auto;
        margin: 0px auto;
        opacity: 0;
        grid-column: 1/1;
        grid-row: 1/1;
        transition: opacity ease-in 0.3s;

        h3 {
          margin-bottom: auto;
        }

        & > p {
          text-align: center;
        }

        &.active {
          opacity: 1;
          position: static;
          padding-bottom: 2em;
          pointer-events: all;
        }

        .instructions {
          code {
            background-color: #323237;
            display: inline;
            vertical-align: middle;
            border-radius: 0.3em;
            font-size: 0.9em;
          }
          ol {
            margin-left: 0.5em;

            & > li {
              margin: 0.5em auto;
            }
          }
        }
      }
    }
  }
</style>
