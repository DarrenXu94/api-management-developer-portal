

module.exports = (componentName) => ({
    content: `import { IWidgetOrder, IWidgetHandler } from "@paperbits/common/editing";
import { ${componentName}Model } from "./${componentName}Model";

export class ${componentName}Handlers implements IWidgetHandler {
    public async getWidgetOrder(): Promise<IWidgetOrder> {
    const widgetOrder: IWidgetOrder = {
        name: "${componentName}",
        displayName: "${componentName}",
        iconClass: "widget-icon widget-icon-component",
        requires: ["html", "js"],
        createModel: async () => {
        return new ${componentName}Model();
        },
    };

    return widgetOrder;
    }
}
  `,
    filename: `${componentName}Handler.ts`,
  });