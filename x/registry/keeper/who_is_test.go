package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/sonr-io/blockchain/testutil/keeper"
	"github.com/sonr-io/blockchain/testutil/nullify"
	"github.com/sonr-io/blockchain/x/registry/keeper"
	"github.com/sonr-io/blockchain/x/registry/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNWhoIs(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.WhoIs {
	items := make([]types.WhoIs, n)
	for i := range items {
		items[i].Name = strconv.Itoa(i)

		keeper.SetWhoIs(ctx, items[i])
	}
	return items
}

func TestWhoIsGet(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNWhoIs(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetWhoIs(ctx,
			item.Name,
		)
		require.True(t, found)
		require.Equal(t,
			nullify.Fill(&item),
			nullify.Fill(&rst),
		)
	}
}
func TestWhoIsRemove(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNWhoIs(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveWhoIs(ctx,
			item.Name,
		)
		_, found := keeper.GetWhoIs(ctx,
			item.Name,
		)
		require.False(t, found)
	}
}

func TestWhoIsGetAll(t *testing.T) {
	keeper, ctx := keepertest.RegistryKeeper(t)
	items := createNWhoIs(keeper, ctx, 10)
	require.ElementsMatch(t,
		nullify.Fill(items),
		nullify.Fill(keeper.GetAllWhoIs(ctx)),
	)
}
