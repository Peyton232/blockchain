// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgDeleteWhichIs } from "./types/bucket/tx";
import { MsgCreateBucket } from "./types/bucket/tx";
import { MsgUpdateBucket } from "./types/bucket/tx";
import { MsgUpdateWhichIs } from "./types/bucket/tx";
import { MsgReadBucket } from "./types/bucket/tx";
import { MsgDeleteBucket } from "./types/bucket/tx";
import { MsgCreateWhichIs } from "./types/bucket/tx";


const types = [
  ["/sonrio.sonr.bucket.MsgDeleteWhichIs", MsgDeleteWhichIs],
  ["/sonrio.sonr.bucket.MsgCreateBucket", MsgCreateBucket],
  ["/sonrio.sonr.bucket.MsgUpdateBucket", MsgUpdateBucket],
  ["/sonrio.sonr.bucket.MsgUpdateWhichIs", MsgUpdateWhichIs],
  ["/sonrio.sonr.bucket.MsgReadBucket", MsgReadBucket],
  ["/sonrio.sonr.bucket.MsgDeleteBucket", MsgDeleteBucket],
  ["/sonrio.sonr.bucket.MsgCreateWhichIs", MsgCreateWhichIs],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgDeleteWhichIs: (data: MsgDeleteWhichIs): EncodeObject => ({ typeUrl: "/sonrio.sonr.bucket.MsgDeleteWhichIs", value: MsgDeleteWhichIs.fromPartial( data ) }),
    msgCreateBucket: (data: MsgCreateBucket): EncodeObject => ({ typeUrl: "/sonrio.sonr.bucket.MsgCreateBucket", value: MsgCreateBucket.fromPartial( data ) }),
    msgUpdateBucket: (data: MsgUpdateBucket): EncodeObject => ({ typeUrl: "/sonrio.sonr.bucket.MsgUpdateBucket", value: MsgUpdateBucket.fromPartial( data ) }),
    msgUpdateWhichIs: (data: MsgUpdateWhichIs): EncodeObject => ({ typeUrl: "/sonrio.sonr.bucket.MsgUpdateWhichIs", value: MsgUpdateWhichIs.fromPartial( data ) }),
    msgReadBucket: (data: MsgReadBucket): EncodeObject => ({ typeUrl: "/sonrio.sonr.bucket.MsgReadBucket", value: MsgReadBucket.fromPartial( data ) }),
    msgDeleteBucket: (data: MsgDeleteBucket): EncodeObject => ({ typeUrl: "/sonrio.sonr.bucket.MsgDeleteBucket", value: MsgDeleteBucket.fromPartial( data ) }),
    msgCreateWhichIs: (data: MsgCreateWhichIs): EncodeObject => ({ typeUrl: "/sonrio.sonr.bucket.MsgCreateWhichIs", value: MsgCreateWhichIs.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
