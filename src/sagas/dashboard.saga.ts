import { KeyAbleProps } from "models/types";
import { ApiConstant, AppConstant, EnvConstant } from "const";
import { BigNumber } from "ethers";
import { RoundDetailClass } from "models";
import { call, put } from "redux-saga/effects";
import { DashboardActions } from "redux-store";
import { DashboardService } from "services";
import { BlockchainUtils } from "utils";

export function* getAllINORoundsRequest() {
  try {
    const response: KeyAbleProps = yield call(DashboardService.getAllINORounds);

    const responseData: KeyAbleProps[] = response?.data || [];
    if (response.status === ApiConstant.STT_OK) {
      const newResponseData = handleRefactorAllRoundData(
        responseData.map((item) => item.numOfSoldBoxes),
      );

      yield put(
        DashboardActions.updateDashboard({
          roundList: newResponseData,
        }),
      );
    } else {
      yield put(DashboardActions.dashboardFailure(responseData));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(DashboardActions.dashboardFailure(error));
  }
}

export function* getWalletRoundData(action: { type: string; data: { walletAddress: string } }) {
  try {
    const { walletAddress } = action.data;

    const response: {
      status: number;
      data: {
        total: BigNumber;
        amounts: BigNumber[][];
      };
    } = yield call(DashboardService.getTotalBoughtBoxesOfUserAllRound, walletAddress);
    const responseData = response.data;
    if (response.status === ApiConstant.STT_OK) {
      const refactorData = handleRefactorWalletRoundData(responseData.amounts);
      const totalBox = BlockchainUtils.convertBigNumberToNumber(responseData.total);

      yield put(
        DashboardActions.updateDashboard({
          roundForUser: [{ walletAddress, totalBox, roundListForUser: refactorData }],
        }),
      );
    } else {
      yield put(DashboardActions.dashboardFailure(responseData));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(DashboardActions.dashboardFailure(error));
  }
}

export function* getTotalAddressData() {
  try {
    const response: KeyAbleProps = yield call(DashboardService.getTotalAddressData);

    const responseData = response?.data || {};
    if (response.status === ApiConstant.STT_OK) {
      const resultList: KeyAbleProps[] = responseData?.result || [];
      const filterResultList = resultList
        .filter(
          (item) =>
            item?.address &&
            item?.address !== EnvConstant.CONTRACT_ADDRESS.ADDRESS_INO_OPEN_BOX?.toLowerCase(),
        )
        .map((mapItem) => mapItem.address);

      const newArrayAddress = [...new Set(filterResultList)];
      const totalWalletAddress = newArrayAddress.length;

      yield put(DashboardActions.updateDashboard({ totalWalletAddress }));
    } else {
      yield put(DashboardActions.dashboardFailure(responseData));
    }
  } catch (error) {
    EnvConstant.IS_DEV && console.log(error);
    yield put(DashboardActions.dashboardFailure(error));
  }
}

const handleRefactorWalletRoundData = (data: BigNumber[][]) => {
  const newData = (data || []).map((round: Array<BigNumber>, index) => {
    let type = AppConstant.ROUND_TYPE.OG;

    const refactorRound = round.map((data) => BlockchainUtils.convertBigNumberToNumber(data));

    const rarityList = [
      {
        type: AppConstant.RARITY_TYPE.EPIC,
        value:
          refactorRound.length > AppConstant.RARITY_TYPE.EPIC
            ? refactorRound[AppConstant.RARITY_TYPE.EPIC]
            : 0,
      },
      {
        type: AppConstant.RARITY_TYPE.RARE,
        value:
          refactorRound.length > AppConstant.RARITY_TYPE.RARE
            ? refactorRound[AppConstant.RARITY_TYPE.RARE]
            : 0,
      },
      {
        type: AppConstant.RARITY_TYPE.UNCOMMON,
        value:
          refactorRound.length > AppConstant.RARITY_TYPE.UNCOMMON
            ? refactorRound[AppConstant.RARITY_TYPE.UNCOMMON]
            : 0,
      },
    ];

    if (index + 1 === AppConstant.ROUND_TYPE.OG) {
      type = AppConstant.ROUND_TYPE.OG;
    } else if (index + 1 === AppConstant.ROUND_TYPE.WL) {
      type = AppConstant.ROUND_TYPE.WL;
    } else if (index + 1 === AppConstant.ROUND_TYPE.Public) {
      type = AppConstant.ROUND_TYPE.Public;
    }

    return new RoundDetailClass({
      type,
      rarityList,
    });
  });

  return newData;
};

function handleRefactorAllRoundData(responseData: BigNumber[][]) {
  const newData = responseData.map((round, index) => {
    const refactorRound = round.map((data) => BlockchainUtils.convertBigNumberToNumber(data));

    const type =
      index + 1 === AppConstant.ROUND_TYPE.OG
        ? AppConstant.ROUND_TYPE.OG
        : index + 1 === AppConstant.ROUND_TYPE.WL
        ? AppConstant.ROUND_TYPE.WL
        : index + 1 === AppConstant.ROUND_TYPE.Public
        ? AppConstant.ROUND_TYPE.Public
        : null;

    const rarityList = [
      {
        type: AppConstant.RARITY_TYPE.EPIC,
        value: refactorRound[AppConstant.RARITY_TYPE.EPIC] || 0,
      },
      {
        type: AppConstant.RARITY_TYPE.RARE,
        value: refactorRound[AppConstant.RARITY_TYPE.RARE] || 0,
      },
      {
        type: AppConstant.RARITY_TYPE.UNCOMMON,
        value: refactorRound[AppConstant.RARITY_TYPE.UNCOMMON] || 0,
      },
    ];

    return {
      type: type,
      rarityList,
    };
  });

  return newData;
}
