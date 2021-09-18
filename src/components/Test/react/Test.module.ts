import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { Test } from "./Test";
import { TestViewModelBinder } from "./TestViewModelBinder";

export class TestModule implements IInjectorModule {
    public register(injector: IInjector): void {
    injector.bind("Test", Test);
    injector.bindToCollection(
        "viewModelBinders",
        TestViewModelBinder
    );
    }
}
  