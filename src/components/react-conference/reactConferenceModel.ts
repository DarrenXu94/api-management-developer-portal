import { LocalStyles } from "@paperbits/common/styles";

export class ReactConferenceModel {
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
