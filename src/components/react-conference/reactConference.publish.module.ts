import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { ReactConferenceModelBinder } from "./reactConferenceModelBinder";

import { ReactConference, ReactConferenceViewModelBinder } from "./react";

export class ReactConferenceModule implements IInjectorModule {
  public register(injector: IInjector): void {
    injector.bind("reactConference", ReactConference);
    injector.bindToCollection("modelBinders", ReactConferenceModelBinder);
    injector.bindToCollection(
      "viewModelBinders",
      ReactConferenceViewModelBinder
    );
  }
}
