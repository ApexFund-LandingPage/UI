export const getHandsomeWalletAddress = (walletAddress) => {
    return `${walletAddress.substring(0,6)}.....${walletAddress.substring(walletAddress.length-5,walletAddress.length)}`
}