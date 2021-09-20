module.exports = (componentName) => ({
    content: `import { LocalStyles } from "@paperbits/common/styles";

export class ${componentName}Model {
    /**
     * Inital count.
     */
    public initialCount: number;
}

export default ${componentName}Model;
  `,
    filename: `${componentName}Model.ts`
  });