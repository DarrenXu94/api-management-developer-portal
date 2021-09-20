module.exports = (componentName) => ({
    content: `import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { ${componentName}Handlers } from "./${componentName}Handler";
import { ${componentName}ModelBinder } from "./${componentName}ModelBinder";

import { ${componentName}, ${componentName}ViewModelBinder } from "./react";

export class ${componentName}EditorModule implements IInjectorModule {
    public register(injector: IInjector): void {
    injector.bindToCollection("widgetHandlers", ${componentName}Handlers);
    injector.bind("${componentName}", ${componentName});
    injector.bindToCollection("modelBinders", ${componentName}ModelBinder);

    injector.bindToCollection(
        "viewModelBinders",
        ${componentName}ViewModelBinder
    );
    }
}
    
  `,
    filename: `${componentName}.design.module.ts`,
  });