import { IWidgetOrder, IWidgetHandler } from "@paperbits/common/editing";
import { TestModel } from "./TestModel";

export class TestHandlers implements IWidgetHandler {
    public async getWidgetOrder(): Promise<IWidgetOrder> {
    const widgetOrder: IWidgetOrder = {
        name: "Test",
        displayName: "React Conference",
        iconClass: "widget-icon widget-icon-component",
        requires: ["html", "js"],
        createModel: async () => {
        return new TestModel();
        },
    };

    return widgetOrder;
    }
}
  