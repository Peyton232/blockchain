package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/sonr-io/blockchain/x/bucket/keeper"
	"github.com/sonr-io/blockchain/x/bucket/types"
)

func SimulateMsgReadBucket(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgReadBucket{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the ReadBucket simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "ReadBucket simulation not implemented"), nil, nil
	}
}
