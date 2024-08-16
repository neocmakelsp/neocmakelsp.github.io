import { delay } from "@std/async";

function start_server() {
  return new Deno.Command(Deno.execPath(), {
    args: ["run", "--allow-net", "--allow-env", "main.tsx"],
    stdout: "inherit",
  });
}

const watcher = Deno.watchFs("./");

let command = start_server();

let child = command.spawn();
for await (const _event of watcher) {
  child.kill("SIGINT");
  await delay(100);
  command = start_server();
  child = command.spawn();
}
watcher.close();
