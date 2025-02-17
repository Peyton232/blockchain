package cli

import (
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sonr-io/blockchain/x/registry/types"
	"github.com/spf13/cobra"
)

func CmdCreateWhoIs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-who-is [index] [did] [value]",
		Short: "Create a new whoIs",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argDid := args[1]
			//argValue := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateWhoIs(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argDid,
				"",
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

func CmdUpdateWhoIs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-who-is [index] [did] [value]",
		Short: "Update a whoIs",
		Args:  cobra.ExactArgs(3),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			// Get indexes
			indexIndex := args[0]

			// Get value arguments
			argDid := args[1]
			//argValue := args[2]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateWhoIs(
				clientCtx.GetFromAddress().String(),
				indexIndex,
				argDid,
				"",
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

func CmdDeleteWhoIs() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-who-is [index]",
		Short: "Delete a whoIs",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			indexIndex := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteWhoIs(
				clientCtx.GetFromAddress().String(),
				indexIndex,
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
