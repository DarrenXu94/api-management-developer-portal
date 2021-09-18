/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import { IWidgetOrder, IWidgetHandler } from "@paperbits/common/editing";
import { ReactConferenceModel } from "./reactConferenceModel";

export class ReactConferenceHandlers implements IWidgetHandler {
  public async getWidgetOrder(): Promise<IWidgetOrder> {
    const widgetOrder: IWidgetOrder = {
      name: "reactConference",
      displayName: "React Conference",
      iconClass: "widget-icon widget-icon-component",
      requires: ["html", "js"],
      createModel: async () => {
        return new ReactConferenceModel();
      },
    };

    return widgetOrder;
  }
}
