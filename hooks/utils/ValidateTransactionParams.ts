import { TransactionParams } from "@/types"

const validateTransactionParams = (params: TransactionParams) => {
    const {amount, gasLimit} = params

    if(amount <= 0) return {isValid: false, error: "Amount must be greater than zero"}
    if(gasLimit < 21000) return {isValid: false, error: "Gas limit is too low"}

    return {isValid: true, error: null}
}

export default validateTransactionParams