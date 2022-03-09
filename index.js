const { readdir } = require("fs/promises");
const { cwd } = require("process");
const core = require("@actions/core");
const github = require("@actions/github");

const listLocaleDirectories = async () => {
  const filter = ["code", "data", "images", "dist", ".github", ".git"];
  const files = await readdir("./", { withFileTypes: true });
  return files.reduce((list, fileInfo) => {
    if (fileInfo.isDirectory() && filter.indexOf(fileInfo.name) === -1) {
      list.push(fileInfo.name);
    }
    return list;
  }, []);
};
const listLocaleMediaFiles = async (locale) => {
  const mediaDirectories = ["images", "resources", "solutions"];
  const mediaFiles = [];
  for (let i = 0; i < mediaDirectories.length; i++) {
    const files = await readdir(`./${locale}/${mediaDirectories[i]}`);
    files.forEach((file) => {
      mediaFiles.push(`./${locale}/${mediaDirectories[i]}/${file}`);
    });
  }
  return mediaFiles;
};

const uploadLocaleFiles = (files) => {
  const {
    context: {
      payload: { after: commit },
    },
  } = github;
};

async function main() {
  try {
    // Get the JSON webhook payload for the event that triggered the workflow
    // const payload = JSON.stringify(github.context.payload, undefined, 2);
    // console.log(`The event payload: ${payload}`);

    console.log(`Current directory: ${cwd()}`);
    const localeDirectories = await listLocaleDirectories();
    const filesToUpload = [];
    for (let i = 0; i < localeDirectories.length; i++) {
      const mediaFiles = await listLocaleMediaFiles(localeDirectories[i]);
      mediaFiles.forEach((file) => filesToUpload.push(file));
    }
    core.setOutput("directories", filesToUpload);
  } catch (error) {
    core.setFailed(error.message);
  }
}

main();
