const { readdir } = require("fs/promises");
const { cwd } = require("process");
const core = require("@actions/core");
const github = require("@actions/github");

async function main() {
  try {
    // `filter` input defined in action metadata file
    const filter = core.getInput("filter").split(",");
    console.log("filter ", filter);
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`The event payload: ${payload}`);

    console.log(`Current directory: ${cwd()}`);
    let directoryString = "";
    try {
      const files = await readdir("./", { withFileTypes: true });
      const directories = files.reduce((list, fileInfo) => {
        if (fileInfo.isDirectory() && filter.indexOf(fileInfo.name) === -1) {
          list.push(fileInfo.name);
        }
        return list;
      }, []);
      directoryString = directories.join(", ");
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
