import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { ReactConferenceHandlers } from "./reactConferenceHandlers";
import { ReactConferenceModelBinder } from "./reactConferenceModelBinder";

import { ReactConference, ReactConferenceViewModelBinder } from "./react";

export class ReactConferenceEditorModule implements IInjectorModule {
  public register(injector: IInjector): void {
    injector.bindToCollection("widgetHandlers", ReactConferenceHandlers);
    injector.bind("reactConference", ReactConference);
    injector.bindToCollection("modelBinders", ReactConferenceModelBinder);
    injector.bindToCollection(
      "viewModelBinders",
      ReactConferenceViewModelBinder
    );
  }
}
