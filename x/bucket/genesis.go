package bucket

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/bucket/keeper"
	"github.com/sonr-io/blockchain/x/bucket/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the whichIs
	for _, elem := range genState.WhichIsList {
		k.SetWhichIs(ctx, elem)
	}
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.WhichIsList = k.GetAllWhichIs(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
