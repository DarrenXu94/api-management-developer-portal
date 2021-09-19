import { Contract } from "@paperbits/common";
import { LocalStyles } from "@paperbits/common/styles";

export interface ReactConferenceContract extends Contract {
  /**
   * Initial count.
   */
  initialCount: number;
}
