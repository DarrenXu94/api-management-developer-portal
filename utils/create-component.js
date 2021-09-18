const fs = require("fs");
const templates = require("./template");

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name");
  process.exit(1);
}

console.log("Creating Component Templates with name: " + componentName);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);
fs.mkdirSync(componentDirectory+"/react");

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
    if (template.folder) {

          fs.writeFileSync(
            `${componentDirectory}/${template.folder}/${template.filename}`,
            template.content
          );
    } else {
        fs.writeFileSync(
            `${componentDirectory}/${template.filename}`,
            template.content
          );
    }
});

console.log(
  "Successfully created component under: " + componentDirectory
);