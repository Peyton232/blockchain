package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/registry/types"
)

// SetWhoIs set a specific whoIs in the store from its index
func (k Keeper) SetWhoIs(ctx sdk.Context, whoIs types.WhoIs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhoIsKeyPrefix))
	b := k.cdc.MustMarshal(&whoIs)
	store.Set(types.WhoIsKey(
		whoIs.Name,
	), b)
}

// GetWhoIs returns a whoIs from its index
func (k Keeper) GetWhoIs(
	ctx sdk.Context,
	index string,

) (val types.WhoIs, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhoIsKeyPrefix))

	b := store.Get(types.WhoIsKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveWhoIs removes a whoIs from the store
func (k Keeper) RemoveWhoIs(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhoIsKeyPrefix))
	store.Delete(types.WhoIsKey(
		index,
	))
}

// GetAllWhoIs returns all whoIs
func (k Keeper) GetAllWhoIs(ctx sdk.Context) (list []types.WhoIs) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.WhoIsKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.WhoIs
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
