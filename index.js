const { readdir } = require("fs/promises");
const { execSync } = require("child_process");
// const { cwd } = require("process");
const awsCli = require("aws-cli-js");
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

// const listLocaleMediaFiles = async (locale) => {
//   const mediaDirectories = ["images", "resources", "solutions"];
//   const mediaFiles = [];
//   for (let i = 0; i < mediaDirectories.length; i++) {
//     const files = await readdir(`./${locale}/${mediaDirectories[i]}`);
//     files.forEach((file) => {
//       mediaFiles.push(`${locale}/${mediaDirectories[i]}/${file}`);
//     });
//   }
//   return mediaFiles;
// };

const uploadLocaleFiles = (directories) => {
  const aws = new awsCli.Aws();
  console.log("payload ", github.context.payload);
  const commit = github.context.payload.after || "1234";
  const { name: repositoryName } =
    github.context.payload.repository || "knowledge-quiz-test";

  // `aws s3 cp ${FILE} s3://${path}/ \
  // --region ${process.env.AWS_REGION} $*`
  const path = `${process.env.AWS_BUCKET}/projects/${repositoryName}/${commit}`;
  // const file = "en/images/q1-1.png";

  directories.forEach((directory) => {
    const command = `aws s3 cp ./${directory} s3://${path}/${directory} --recursive`;
    const result = execSync(command);
    console.log("aws copy result = ", result.toString());
  });
};

async function main() {
  try {
    console.log("env: ", process.env);
    const filesToUpload = [];
    const mediaDirectories = ["images", "resources", "solutions"];

    const localeDirectories = await listLocaleDirectories();
    for (let i = 0; i < localeDirectories.length; i++) {
      mediaDirectories.forEach((directory) => {
        filesToUpload.push(`${localeDirectories[i]}/${directory}`);
      });
      // const mediaFiles = await listLocaleMediaFiles(localeDirectories[i]);
      // mediaFiles.forEach((file) => filesToUpload.push(file));
    }
    console.log("filesToUpload ", filesToUpload);
    uploadLocaleFiles(filesToUpload);
    core.setOutput("directories", []);
  } catch (error) {
    console.log("error ", error);
    core.setFailed(error.message);
  }
}

main();
