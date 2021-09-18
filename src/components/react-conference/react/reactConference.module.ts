import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { ReactConference } from "./reactConference";
import { ReactConferenceViewModelBinder } from "./reactConferenceViewModelBinder";

export class ReactConferenceModule implements IInjectorModule {
  public register(injector: IInjector): void {
    injector.bind("reactConference", ReactConference);
    injector.bindToCollection(
      "viewModelBinders",
      ReactConferenceViewModelBinder
    );
  }
}
