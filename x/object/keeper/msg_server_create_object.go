package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/sonr/x/object/types"
)

func (k msgServer) CreateObject(goCtx context.Context, msg *types.MsgCreateObject) (*types.MsgCreateObjectResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateObjectResponse{}, nil
}
