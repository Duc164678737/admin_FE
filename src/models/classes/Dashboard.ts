import { KeyAbleProps } from "models/types";
import RoundDetail from "./RoundDetail";

class Dashboard {
  totalWalletAddress: number;
  roundList: RoundDetail[];
  roundForUser: {
    walletAddress: string;
    totalBox: number;
    roundListForUser: RoundDetail[];
  }[];

  constructor(data?: Dashboard | KeyAbleProps) {
    this.totalWalletAddress = data?.totalWalletAddress || 0;
    this.roundList = data?.roundList || [];
    this.roundForUser = data?.roundForUser || [];
  }
}

export default Dashboard;
