const { readdir } = require("fs/promises");
const core = require("@actions/core");
const github = require("@actions/github");

async function main() {
  try {
    // `filter` input defined in action metadata file
    const filter = core.getInput("filter");
    console.log(`Hello ${filter}!`);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event payload: ${payload}`);

    try {
      const files = await readdir("./", { withFileTypes: true });
      const directories = files.reduce((fileInfo, list) => {
        if (fileInfo.isDirectory() && !filter.find(fileInfo.name)) {
          list.push(fileInfo.name);
        }
      }, []);
      const directoryString = directories.join(", ");
      console.log(directoryString);
    } catch (err) {
      console.error(err);
      throw err;
    }
    core.setOutput("directories", directoryString);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
