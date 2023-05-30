import { getExecOutput } from "@actions/exec";
import { downloadTool } from "@actions/tool-cache";
import { chmod } from "fs/promises";

export const download = async () => {
  console.log("Downloading rustup...");

  switch (process.platform) {
    case "win32": {
      const is64bit = process.arch === "x64";

      const url = is64bit
        ? "https://win.rustup.rs/x86_64"
        : "https://win.rustup.rs/i686";

      const rustupSh = await downloadTool(url);
      await chmod(rustupSh, 0o755);

      const output = await getExecOutput(rustupSh, ["-y"]);
      console.log(output);

      break;
    }
    default: {
      const rustupSh = await downloadTool("https://sh.rustup.rs");
      await chmod(rustupSh, 0o755);

      const output = await getExecOutput(rustupSh, ["-y"]);

      console.log(output);
    }
  }
};
