import { getExecOutput } from "@actions/exec";
import { downloadTool } from "@actions/tool-cache";

export const download = async () => {
  console.log("Downloading rustup...");

  switch (process.platform) {
    case "win32": {
      const is64bit = process.arch === "x64";

      const url = is64bit
        ? "https://win.rustup.rs/x86_64"
        : "https://win.rustup.rs/i686";

      const path = await downloadTool(url);

      console.log(`Downloaded rustup installer to ${path}`);

      const output = await getExecOutput(`${path} -y`);
      console.log(output);

      break;
    }
    default: {
      const output = await getExecOutput(
        "curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y"
      );

      console.log(output);
    }
  }
};
