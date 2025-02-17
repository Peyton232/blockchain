package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/sonr-io/blockchain/x/bucket/keeper"
	"github.com/sonr-io/blockchain/x/bucket/types"
)

func SimulateMsgDeleteBucket(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgDeleteBucket{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the DeleteBucket simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "DeleteBucket simulation not implemented"), nil, nil
	}
}
