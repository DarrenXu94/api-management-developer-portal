
module.exports = (componentName) => ({
    content: `export * from "./${componentName}Handler";
export * from "./${componentName}Model";
    `,
    filename: `index.ts`
  });
