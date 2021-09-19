import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { ReactConferenceHandlers } from "./reactConferenceHandlers";

import { ReactConference, ReactConferenceViewModelBinder } from "./react";
import { ReactConferenceEditor } from "./ko/reactConferenceEditorViewModel";
import { ReactConferenceModelBinder } from "./reactConferenceModelBinder";

export class ReactConferenceEditorModule implements IInjectorModule {
  public register(injector: IInjector): void {
    injector.bindToCollection("widgetHandlers", ReactConferenceHandlers);
    injector.bind("reactConference", ReactConference);
    injector.bind("reactConferenceEditor", ReactConferenceEditor);
    injector.bindToCollection("modelBinders", ReactConferenceModelBinder);

    injector.bindToCollection(
      "viewModelBinders",
      ReactConferenceViewModelBinder
    );
  }
}
