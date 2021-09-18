import { IInjectorModule, IInjector } from "@paperbits/common/injection";

import { ReactConference, ReactConferenceViewModelBinder } from "./react";

export class ReactConferenceModule implements IInjectorModule {
  public register(injector: IInjector): void {
    injector.bind("reactConference", ReactConference);
    injector.bindToCollection(
      "viewModelBinders",
      ReactConferenceViewModelBinder
    );
  }
}
