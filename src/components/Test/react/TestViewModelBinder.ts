import { Bag } from "@paperbits/common";
import { WidgetBinding } from "@paperbits/common/editing";
import { EventManager } from "@paperbits/common/events";
import { StyleCompiler } from "@paperbits/common/styles";
import { ViewModelBinder } from "@paperbits/common/widgets";
import { ApiService } from "../../../services/apiService";
import { TestModel } from "../TestModel";
import { Test } from "./Test";

export class TestViewModelBinder
    implements ViewModelBinder<TestModel, Test>
{
    constructor(
    private readonly eventManager: EventManager,
    private readonly styleCompiler: StyleCompiler,
    private readonly apiService: ApiService
    ) {}

    public async createWidgetBinding(
    model: TestModel,
    bindingContext: Bag<any>
    ): Promise<WidgetBinding<TestModel, Test>> {
    const binding = new WidgetBinding<TestModel, Test>();
    binding.framework = "react";
    binding.model = model;
    binding.name = "Test";
    binding.readonly = false;
    binding.flow = "block";
    binding.draggable = true;
    binding.displayName = "React Conference";
    binding.viewModelClass = Test;
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
    model: TestModel,
    viewModel: Test,
    bindingContext?: Bag<any>
    ): Promise<Test> {
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

    public canHandleModel(model: TestModel): boolean {
    return model instanceof TestModel;
    }
}
    
  