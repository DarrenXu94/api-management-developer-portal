module.exports = (componentName) => ({
    content: `import { LocalStyles } from "@paperbits/common/styles";

export class ${componentName}Model {
    /**
     * Inital count.
     */
    public initialCount: number;

    /**
     * Widget local styles.
     */
    public styles: LocalStyles;

    constructor() {
    this.initialCount = 0;
    this.styles = {
        appearance: "components/card/default",
    };
    }
}

export default ${componentName}Model;
  `,
    filename: `${componentName}Model.ts`
  });