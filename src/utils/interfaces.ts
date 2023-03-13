export interface IRoadmapData {
  title: string;
  contents: Array<string>;
}

export interface ITokenAmountInfo {
  claimedTokenAmount: number;
  totalTokenAmount: number;
}

export interface IClaimableTokenInfo {
  id: number;
  investor: string;
  claimableTokenAmount: number;
}
