module.exports = (componentName) => ({
    content: `import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { ${componentName}ModelBinder } from "./${componentName}ModelBinder";

import { ${componentName}, ${componentName}ViewModelBinder } from "./react";

export class ${componentName}Module implements IInjectorModule {
    public register(injector: IInjector): void {
    injector.bind("${componentName}", ${componentName});
    injector.bindToCollection("modelBinders", ${componentName}ModelBinder);

    injector.bindToCollection(
        "viewModelBinders",
        ${componentName}ViewModelBinder
    );
    }
}
    
  `,
    filename: `${componentName}.publish.module.ts`,
  });