package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sonr-io/blockchain/x/registry/types"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdAccessService() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "access-service [did]",
		Short: "Broadcast message access-service",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argDid := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAccessService(
				clientCtx.GetFromAddress().String(),
				argDid,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
