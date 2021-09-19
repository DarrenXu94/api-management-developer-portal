import { Bag } from "@paperbits/common";
import { WidgetBinding } from "@paperbits/common/editing";
import { EventManager } from "@paperbits/common/events";
import { StyleCompiler } from "@paperbits/common/styles";
import { ViewModelBinder } from "@paperbits/common/widgets";
import { ApiService } from "../../../services/apiService";
import { ReactConferenceModel } from "../reactConferenceModel";
import { ReactConference } from "./reactConference";

export class ReactConferenceViewModelBinder
  implements ViewModelBinder<ReactConferenceModel, ReactConference>
{
  constructor(
    private readonly eventManager: EventManager,
    private readonly styleCompiler: StyleCompiler,
    private readonly apiService: ApiService
  ) {}

  public async createWidgetBinding(
    model: ReactConferenceModel,
    bindingContext: Bag<any>
  ): Promise<WidgetBinding<ReactConferenceModel, ReactConference>> {
    const binding = new WidgetBinding<ReactConferenceModel, ReactConference>();
    binding.framework = "react";
    binding.model = model;
    binding.name = "react-conference";
    binding.editor = "react-conference-editor";
    binding.readonly = false;
    binding.flow = "block";
    binding.draggable = true;
    binding.displayName = "React Conference";
    binding.viewModelClass = ReactConference;
    binding.applyChanges = async () => {
      await this.modelToViewModel(model, binding.viewModel, bindingContext);
      this.eventManager.dispatchEvent("onContentUpdate");
    };
    binding.onCreate = async () => {
      await this.modelToViewModel(model, binding.viewModel, bindingContext);
    };

    return binding;
  }

  public async modelToViewModel(
    model: ReactConferenceModel,
    viewModel: ReactConference,
    bindingContext?: Bag<any>
  ): Promise<ReactConference> {
    let classNames = null;

    viewModel.setState((state) => ({
      initialCount: model.initialCount,
      classNames: classNames,
      apiService: this.apiService,
    }));

    return viewModel;
  }

  public canHandleModel(model: ReactConferenceModel): boolean {
    return model instanceof ReactConferenceModel;
  }
}
