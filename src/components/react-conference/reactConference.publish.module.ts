import { IInjectorModule, IInjector } from "@paperbits/common/injection";

import { ReactConference, ReactConferenceViewModelBinder } from "./react";
import { ReactConferenceModelBinder } from "./reactConferenceModelBinder";

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
