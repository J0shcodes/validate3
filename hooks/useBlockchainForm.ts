import useValidateAddress from './useValidateAddress'
import useValidateTransaction from './useValidateTransaction'
import { TransactionParams } from '@/types'

const useBlockchainForm = (
  address: string,
  network: 'ethereum' | 'solana',
  transactionParams: TransactionParams,
) => {
  const addressValidation = useValidateAddress(address, network)
  const transactionValidation = useValidateTransaction(transactionParams)

  return {
    addressValidation,
    transactionValidation,
    isFormValid: addressValidation.isValid && transactionValidation.isValid,
  }
}

export default useBlockchainForm
