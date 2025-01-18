import { useState, useEffect } from 'react'

import validateTransactionParams from './utils/ValidateTransactionParams'
import { TransactionParams } from '@/types'

const useValidateTransaction = (params: TransactionParams) => {
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
        const validation = validateTransactionParams(params)
        setIsValid(validation.isValid)
        setError(validation.error)
    } catch (err) {
        setIsValid(false)
        setError((err as Error).message)
    }
  }, [params])

  return {isValid, error}
}

export default useValidateTransaction
