module.exports = (componentName) => ({
    content: `import { Bag } from "@paperbits/common";
import { WidgetBinding } from "@paperbits/common/editing";
import { EventManager } from "@paperbits/common/events";
import { StyleCompiler } from "@paperbits/common/styles";
import { ViewModelBinder } from "@paperbits/common/widgets";
import { ApiService } from "../../../services/apiService";
import { ${componentName}Model } from "../${componentName}Model";
import { ${componentName} } from "./${componentName}";

export class ${componentName}ViewModelBinder
    implements ViewModelBinder<${componentName}Model, ${componentName}>
{
    constructor(
    private readonly eventManager: EventManager,
    private readonly styleCompiler: StyleCompiler,
    private readonly apiService: ApiService
    ) {}

    public async createWidgetBinding(
    model: ${componentName}Model,
    bindingContext: Bag<any>
    ): Promise<WidgetBinding<${componentName}Model, ${componentName}>> {
    const binding = new WidgetBinding<${componentName}Model, ${componentName}>();
    binding.framework = "react";
    binding.model = model;
    binding.name = "${componentName}";
    binding.readonly = false;
    binding.flow = "block";
    binding.draggable = true;
    binding.displayName = "${componentName}";
    binding.viewModelClass = ${componentName};
    binding.applyChanges = async () => {
        await this.modelToViewModel(model, binding.viewModel, bindingContext);
        this.eventManager.dispatchEvent("onContentUpdate");
    };
    binding.onCreate = async () => {
        await this.modelToViewModel(model, binding.viewModel, bindingContext);
    };
    binding.onDispose = async () => {
        if (model.styles?.instance) {
        bindingContext.styleManager.removeStyleSheet(model.styles.instance.key);
        }
    };

    return binding;
    }

    public async modelToViewModel(
    model: ${componentName}Model,
    viewModel: ${componentName},
    bindingContext?: Bag<any>
    ): Promise<${componentName}> {
    let classNames = null;

    if (model.styles) {
        const styleModel = await this.styleCompiler.getStyleModelAsync(
        model.styles,
        bindingContext?.styleManager
        );

        if (styleModel.styleManager) {
        styleModel.styleManager.setStyleSheet(styleModel.styleSheet);
        }

        classNames = styleModel.classNames;
    }

    viewModel.setState((state) => ({
        initialCount: model.initialCount,
        classNames: classNames,
        apiService: this.apiService,
    }));

    return viewModel;
    }

    public canHandleModel(model: ${componentName}Model): boolean {
    return model instanceof ${componentName}Model;
    }
}
    
  `,
    filename: `${componentName}ViewModelBinder.ts`,
    folder: 'react'
  });