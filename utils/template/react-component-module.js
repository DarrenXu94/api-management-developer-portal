module.exports = (componentName) => ({
    content: `import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { ${componentName} } from "./${componentName}";
import { ${componentName}ViewModelBinder } from "./${componentName}ViewModelBinder";

export class ${componentName}Module implements IInjectorModule {
    public register(injector: IInjector): void {
    injector.bind("${componentName}", ${componentName});
    injector.bindToCollection(
        "viewModelBinders",
        ${componentName}ViewModelBinder
    );
    }
}
  `,
    filename: `${componentName}.module.ts`,
    folder: 'react'
  });