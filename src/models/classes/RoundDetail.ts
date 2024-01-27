import { AppConstant } from "const";
import { KeyAbleProps } from "models/types";

class RoundDetail {
  type: AppConstant.ROUND_TYPE;
  rarityList: { type: AppConstant.RARITY_TYPE; value: number }[];

  constructor(data: RoundDetail | KeyAbleProps) {
    this.type = data.type;
    this.rarityList = data?.rarityList || [];
  }
}

export default RoundDetail;
