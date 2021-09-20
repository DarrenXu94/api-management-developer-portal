module.exports = (componentName) => ({
    content: `export * from "./${componentName}-runtime";
    `,
    filename: `index.ts`,
    folder: 'react/runtime',
  });
