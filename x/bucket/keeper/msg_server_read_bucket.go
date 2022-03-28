package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sonr-io/blockchain/x/bucket/types"
)

func (k msgServer) ReadBucket(goCtx context.Context, msg *types.MsgReadBucket) (*types.MsgReadBucketResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgReadBucketResponse{}, nil
}
