
module.exports = (componentName) => ({
    content: `import { Contract } from "@paperbits/common";

    export interface ${componentName}Contract extends Contract {
      initialCount: number;
    }
    `,
    filename: `${componentName}Contract.ts`
  });
