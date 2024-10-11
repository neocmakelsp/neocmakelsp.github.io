# Usage

## Neovim

Just follow the way in
[nvim-lspconfig](https://github.com/neovim/nvim-lspconfig/blob/master/doc/configs.md#neocmake).

For Example:

```lua
local configs = require("lspconfig.configs")
local nvim_lsp = require("lspconfig")
nvim_lsp.neocmake.setup{
    cmd = { "neocmakelsp", "--stdio" },
    filetypes = { "cmake" },
    root_dir = function(fname)
        return nvim_lsp.util.find_git_ancestor(fname)
    end,
    single_file_support = true,-- suggested
    on_attach = on_attach, -- on_attach is the on_attach function you defined
    init_options = {
        format = {
            enable = true
        },
        lint = {
            enable = true
        },
        scan_cmake_in_package = true -- default is true
    }
}
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
