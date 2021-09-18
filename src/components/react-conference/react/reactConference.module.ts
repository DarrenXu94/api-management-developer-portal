import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { ReactConference } from "./reactConference";
import { ReactConferenceModelBinder } from "../reactConferenceModelBinder";
import { ReactConferenceViewModelBinder } from "./reactConferenceViewModelBinder";

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
