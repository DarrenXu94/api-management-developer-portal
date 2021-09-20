module.exports = (componentName) => ({
    content: `import { IInjector, IInjectorModule } from "@paperbits/common/injection";

    import { ${componentName}Runtime } from "./react/runtime";
    
    export class ${componentName}RuntimeModule implements IInjectorModule {
      public register(injector: IInjector): void {
        injector.bind("${componentName}Runtime", ${componentName}Runtime);
      }
    }
    `,
    filename: `${componentName}.runtime.module.ts`
  });
