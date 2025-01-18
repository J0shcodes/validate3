import { useState, useEffect } from 'react'

import validateEthereumAddress from './utils/validateEthereumAddress'
import validateSolanaAddress from './utils/validateSolanaAddress'

type Network = 'ethereum' | 'solana'

const useValidateAddress = (address: string, network: Network) => {
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    
    if (!address) {
      setIsValid(null)
      setError(null)
      return
    }

    try {
      if (network === 'ethereum') {
        setIsValid(validateEthereumAddress(address))
      } else if (network === "solana") {
        setIsValid(validateSolanaAddress(address))
      }
    } catch (err) {
        setIsValid(false)
        setError((err as Error).message)
    }
  }, [address, network])

  return {isValid, error}
}

export default useValidateAddress
