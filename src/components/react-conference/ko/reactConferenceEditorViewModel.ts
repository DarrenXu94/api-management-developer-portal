import * as ko from "knockout";
import template from "./reactConferenceEditorView.html";
import {
  Component,
  OnMounted,
  Param,
  Event,
} from "@paperbits/common/ko/decorators";
import { WidgetEditor } from "@paperbits/common/widgets";
import { ReactConferenceModel } from "../reactConferenceModel";

@Component({
  selector: "react-conference-editor",
  template: template,
})
export class ReactConferenceEditor
  implements WidgetEditor<ReactConferenceModel>
{
  public readonly initialCount: ko.Observable<number>;

  constructor() {
    this.initialCount = ko.observable();
  }

  @Param()
  public model: ReactConferenceModel;

  @Event()
  public onChange: (model: ReactConferenceModel) => void;

  @OnMounted()
  public async initialize(): Promise<void> {
    this.initialCount(this.model.initialCount);
    this.initialCount.subscribe(this.applyChanges);
  }

  private applyChanges(): void {
    this.model.initialCount = this.initialCount();
    this.onChange(this.model);
  }
}
