import { IInjector, IInjectorModule } from "@paperbits/common/injection";

import { ReactConferenceRuntime } from "./react/runtime";

export class ReactConferenceRuntimeModule implements IInjectorModule {
  public register(injector: IInjector): void {
    injector.bind("reactConferenceRuntime", ReactConferenceRuntime);
  }
}
