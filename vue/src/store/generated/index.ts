// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import CosmosCosmosSdkCosmosAuthzV1Beta1 from './cosmos/cosmos-sdk/cosmos.authz.v1beta1'
import CosmosCosmosSdkCosmosBankV1Beta1 from './cosmos/cosmos-sdk/cosmos.bank.v1beta1'
import CosmosCosmosSdkCosmosCrisisV1Beta1 from './cosmos/cosmos-sdk/cosmos.crisis.v1beta1'
import CosmosCosmosSdkCosmosDistributionV1Beta1 from './cosmos/cosmos-sdk/cosmos.distribution.v1beta1'
import CosmosCosmosSdkCosmosEvidenceV1Beta1 from './cosmos/cosmos-sdk/cosmos.evidence.v1beta1'
import CosmosCosmosSdkCosmosFeegrantV1Beta1 from './cosmos/cosmos-sdk/cosmos.feegrant.v1beta1'
import CosmosCosmosSdkCosmosGovV1Beta1 from './cosmos/cosmos-sdk/cosmos.gov.v1beta1'
import CosmosCosmosSdkCosmosSlashingV1Beta1 from './cosmos/cosmos-sdk/cosmos.slashing.v1beta1'
import CosmosCosmosSdkCosmosStakingV1Beta1 from './cosmos/cosmos-sdk/cosmos.staking.v1beta1'
import CosmosCosmosSdkCosmosVestingV1Beta1 from './cosmos/cosmos-sdk/cosmos.vesting.v1beta1'
import CosmosIbcGoIbcApplicationsTransferV1 from './cosmos/ibc-go/ibc.applications.transfer.v1'
import SonrIoBlockchainSonrioSonrBlob from './sonr-io/blockchain/sonrio.sonr.blob'
import SonrIoBlockchainSonrioSonrBucket from './sonr-io/blockchain/sonrio.sonr.bucket'
import SonrIoBlockchainSonrioSonrChannel from './sonr-io/blockchain/sonrio.sonr.channel'
import SonrIoBlockchainSonrioSonrObject from './sonr-io/blockchain/sonrio.sonr.object'
import SonrIoBlockchainSonrioSonrRegistry from './sonr-io/blockchain/sonrio.sonr.registry'
import SonrIoBlockchainSonrioSonrVault from './sonr-io/blockchain/sonrio.sonr.vault'
import SonrIoSonrSonrioSonrBlob from './sonr-io/sonr/sonrio.sonr.blob'
import SonrIoSonrSonrioSonrBucket from './sonr-io/sonr/sonrio.sonr.bucket'
import SonrIoSonrSonrioSonrChannel from './sonr-io/sonr/sonrio.sonr.channel'
import SonrIoSonrSonrioSonrObject from './sonr-io/sonr/sonrio.sonr.object'
import SonrIoSonrSonrioSonrRegistry from './sonr-io/sonr/sonrio.sonr.registry'


export default { 
  CosmosCosmosSdkCosmosAuthzV1Beta1: load(CosmosCosmosSdkCosmosAuthzV1Beta1, 'cosmos.authz.v1beta1'),
  CosmosCosmosSdkCosmosBankV1Beta1: load(CosmosCosmosSdkCosmosBankV1Beta1, 'cosmos.bank.v1beta1'),
  CosmosCosmosSdkCosmosCrisisV1Beta1: load(CosmosCosmosSdkCosmosCrisisV1Beta1, 'cosmos.crisis.v1beta1'),
  CosmosCosmosSdkCosmosDistributionV1Beta1: load(CosmosCosmosSdkCosmosDistributionV1Beta1, 'cosmos.distribution.v1beta1'),
  CosmosCosmosSdkCosmosEvidenceV1Beta1: load(CosmosCosmosSdkCosmosEvidenceV1Beta1, 'cosmos.evidence.v1beta1'),
  CosmosCosmosSdkCosmosFeegrantV1Beta1: load(CosmosCosmosSdkCosmosFeegrantV1Beta1, 'cosmos.feegrant.v1beta1'),
  CosmosCosmosSdkCosmosGovV1Beta1: load(CosmosCosmosSdkCosmosGovV1Beta1, 'cosmos.gov.v1beta1'),
  CosmosCosmosSdkCosmosSlashingV1Beta1: load(CosmosCosmosSdkCosmosSlashingV1Beta1, 'cosmos.slashing.v1beta1'),
  CosmosCosmosSdkCosmosStakingV1Beta1: load(CosmosCosmosSdkCosmosStakingV1Beta1, 'cosmos.staking.v1beta1'),
  CosmosCosmosSdkCosmosVestingV1Beta1: load(CosmosCosmosSdkCosmosVestingV1Beta1, 'cosmos.vesting.v1beta1'),
  CosmosIbcGoIbcApplicationsTransferV1: load(CosmosIbcGoIbcApplicationsTransferV1, 'ibc.applications.transfer.v1'),
  SonrIoBlockchainSonrioSonrBlob: load(SonrIoBlockchainSonrioSonrBlob, 'sonrio.sonr.blob'),
  SonrIoBlockchainSonrioSonrBucket: load(SonrIoBlockchainSonrioSonrBucket, 'sonrio.sonr.bucket'),
  SonrIoBlockchainSonrioSonrChannel: load(SonrIoBlockchainSonrioSonrChannel, 'sonrio.sonr.channel'),
  SonrIoBlockchainSonrioSonrObject: load(SonrIoBlockchainSonrioSonrObject, 'sonrio.sonr.object'),
  SonrIoBlockchainSonrioSonrRegistry: load(SonrIoBlockchainSonrioSonrRegistry, 'sonrio.sonr.registry'),
  SonrIoBlockchainSonrioSonrVault: load(SonrIoBlockchainSonrioSonrVault, 'sonrio.sonr.vault'),
  SonrIoSonrSonrioSonrBlob: load(SonrIoSonrSonrioSonrBlob, 'sonrio.sonr.blob'),
  SonrIoSonrSonrioSonrBucket: load(SonrIoSonrSonrioSonrBucket, 'sonrio.sonr.bucket'),
  SonrIoSonrSonrioSonrChannel: load(SonrIoSonrSonrioSonrChannel, 'sonrio.sonr.channel'),
  SonrIoSonrSonrioSonrObject: load(SonrIoSonrSonrioSonrObject, 'sonrio.sonr.object'),
  SonrIoSonrSonrioSonrRegistry: load(SonrIoSonrSonrioSonrRegistry, 'sonrio.sonr.registry'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}
