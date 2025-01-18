import { ethers } from "ethers"

const validateEthereumAddress = (address: string): boolean => {
    return ethers.isAddress(address)
}

export default validateEthereumAddress