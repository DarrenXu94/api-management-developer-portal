import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { TestHandlers } from "./TestHandler";

import { Test, TestViewModelBinder } from "./react";

export class TestEditorModule implements IInjectorModule {
  public register(injector: IInjector): void {
    injector.bindToCollection("widgetHandlers", TestHandlers);
    injector.bind("Test", Test);
    injector.bindToCollection("viewModelBinders", TestViewModelBinder);
  }
}
