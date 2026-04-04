import { $ } from "bun";

async function run() {
  try {
    try {
      await $`bun run format`.quiet();
    } catch {}

    await $`bun run lint`.quiet();

    process.exit(0);
    // biome-ignore lint/suspicious/noExplicitAny: We want to catch any error here to report it back to ai agent.
  } catch (error: any) {
    const output =
      error.stdout?.toString() || error.stderr?.toString() || error.message;

    const response = {
      decision: "deny",
      systemMessage: `Code linting failed. Fix the errors: ${output}`,
    };

    console.log(JSON.stringify(response));
    process.exit(1);
  }
}

run();
