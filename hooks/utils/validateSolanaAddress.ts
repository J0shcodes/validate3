import { PublicKey } from "@solana/web3.js"

const validateSolanaAddress = (address: string): boolean => {
    try {
        new PublicKey(address)
        return true
    } catch {
        return false
    }
}

export default validateSolanaAddress