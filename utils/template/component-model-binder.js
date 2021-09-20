
module.exports = (componentName) => ({
    content: `import { IModelBinder } from "@paperbits/common/editing";
    import { ${componentName}Model } from "./${componentName}Model";
    import { Contract } from "@paperbits/common";
    import { ${componentName}Contract } from "./${componentName}Contract";
    
    export class ${componentName}ModelBinder
      implements IModelBinder<${componentName}Model>
    {
      public canHandleContract(contract: Contract): boolean {
        return contract.type === "${componentName}";
      }
    
      public canHandleModel(model: ${componentName}Model): boolean {
        return model instanceof ${componentName}Model;
      }
    
      public async contractToModel(
        contract: ${componentName}Contract
      ): Promise<${componentName}Model> {
        const model = new ${componentName}Model();
        model.initialCount = contract.initialCount;
        return model;
      }
    
      public modelToContract(model: ${componentName}Model): Contract {
        const contract: ${componentName}Contract = {
          type: "${componentName}",
          initialCount: model.initialCount,
        };
    
        return contract;
      }
    }
    `,
    filename: `${componentName}ModelBinder.ts`
  });
