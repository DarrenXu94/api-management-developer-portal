module.exports = (componentName) => ({
    content: `export * from "./${componentName}.module";
export * from "./${componentName}";
export * from "./${componentName}ViewModelBinder";
    `,
    filename: `index.ts`,
    folder: 'react',
  });
