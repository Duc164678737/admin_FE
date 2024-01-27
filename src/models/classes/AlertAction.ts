import { ObjectMultiLanguageProps } from "models/types";
import { AppConstant, ApiConstant } from "const";
import { getLabel } from "language/index";
import StringFormat from "string-format";

class AlertAction {
  readonly actionType: AppConstant.TYPE_ACTION;
  readonly status: number;
  readonly isSuccess: boolean;
  readonly title: string;
  readonly content: string;

  constructor(actionType: AppConstant.TYPE_ACTION, status: number) {
    this.actionType = actionType;
    this.status = status;
    this.isSuccess = [ApiConstant.STT_OK, ApiConstant.STT_CREATED].includes(this.status);

    // Handle API in array ADD, SAVE, DELETE
    const actionContent = this.getContent();
    if (this.isSuccess) {
      const successContent = getLabel("alertSuccessObj", {
        returnObjects: true,
      }) as ObjectMultiLanguageProps;
      this.title = successContent.title;
      this.content = StringFormat(successContent.fmContent, actionContent);
    } else {
      const errorContent = getLabel("alertErrorObj", {
        returnObjects: true,
      }) as ObjectMultiLanguageProps;
      this.title = errorContent.title;
      this.content = StringFormat(errorContent.fmContent, actionContent);
    }
  }

  private getContent() {
    const actionContent = getLabel("actionObj", {
      returnObjects: true,
    }) as ObjectMultiLanguageProps;

    switch (this.actionType) {
      case AppConstant.TYPE_ACTION.ADD:
        return actionContent.add;

      case AppConstant.TYPE_ACTION.SAVE:
        return actionContent.save;

      case AppConstant.TYPE_ACTION.DELETE:
        return actionContent.delete;

      default:
        break;
    }
    return "";
  }
}

export default AlertAction;
