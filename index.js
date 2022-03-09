const { readdir } = require("fs/promises");
const { execSync } = require("child_process");
const core = require("@actions/core");
const github = require("@actions/github");

const listLocaleDirectories = async () => {
  const filter = [
    "code",
    "data",
    "images",
    "dist",
    ".github",
    ".git",
    "node_modules",
  ];
  const files = await readdir("./", { withFileTypes: true });
  return files.reduce((list, fileInfo) => {
    if (fileInfo.isDirectory() && filter.indexOf(fileInfo.name) === -1) {
      list.push(fileInfo.name);
    }
    return list;
  }, []);
};

const uploadLocaleFiles = (directories) => {
  const commit = github.context.payload.after || "testing";
  const { name: repositoryName } =
    github.context.payload.repository || "knowledge-quiz-test";

  const path = `${process.env.AWS_BUCKET}/projects/${repositoryName}/${commit}`;

  directories.forEach((directory) => {
    const command = `aws s3 cp ./${directory} s3://${path}/${directory} --recursive`;
    const result = execSync(command);
    console.log("aws copy result = ", result.toString());
  });
};

async function main() {
  try {
    // console.log("env: ", process.env);
    const directoriesToUpload = [];
    const mediaDirectories = ["images", "resources", "solutions"];

    const localeDirectories = await listLocaleDirectories();
    for (let i = 0; i < localeDirectories.length; i++) {
      mediaDirectories.forEach((directory) => {
        directoriesToUpload.push(`${localeDirectories[i]}/${directory}`);
      });
    }
    uploadLocaleFiles(directoriesToUpload);
    core.setOutput("directories", directoriesToUpload);
  } catch (error) {
    console.log("error ", error);
    core.setFailed(error.message);
  }
}

main();
