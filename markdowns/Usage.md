# Usage

## Neovim

Just follow the way in
[nvim-lspconfig](https://github.com/neovim/nvim-lspconfig/blob/master/doc/configs.md#neocmake).

For Example:

```lua
vim.lsp.enable("neocmake")
```

## Helix

## Tcp

```toml
[[language]]
name = "neocmake"
auto-format = true
language-servers = [{ name = "neocmakelsp" }]

[language-server.neocmakelsp]
command = "nc"
args = ["localhost", "9257"]
```

#### Stdio

```toml
[[language]]
name = "cmake"
auto-format = true
language-servers = [{ name = "neocmakelsp" }]

[language-server.neocmakelsp]
command = "neocmakelsp"
args = ["--stdio"]
```

## emacs configuration

To use neocmakelsp with eglot:

```emacs-lisp
(use-package cmake-ts-mode
  :config
  (add-hook 'cmake-ts-mode-hook
    (defun setup-neocmakelsp ()
      (require 'eglot)
      (add-to-list 'eglot-server-programs `((cmake-ts-mode) . ("neocmakelsp" "--stdio")))
      (eglot-ensure))))
```
