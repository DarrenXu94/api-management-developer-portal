import { IModelBinder } from "@paperbits/common/editing";
import { ReactConferenceModel } from "./reactConferenceModel";
import { Contract } from "@paperbits/common";
import { ReactConferenceContract } from "./reactConferenceContract";

export class ReactConferenceModelBinder
  implements IModelBinder<ReactConferenceModel>
{
  public canHandleContract(contract: Contract): boolean {
    return contract.type === "react-conference";
  }

  public canHandleModel(model: ReactConferenceModel): boolean {
    return model instanceof ReactConferenceModel;
  }

  public async contractToModel(
    contract: ReactConferenceContract
  ): Promise<ReactConferenceModel> {
    const model = new ReactConferenceModel();
    model.initialCount = contract.initialCount;
    return model;
  }

  public modelToContract(model: ReactConferenceModel): Contract {
    const contract: ReactConferenceContract = {
      type: "react-conference",
      initialCount: model.initialCount,
    };

    return contract;
  }
}
