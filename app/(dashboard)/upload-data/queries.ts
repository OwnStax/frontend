import { useReadContract, useAccount } from "wagmi";
import contractAbi from '@/abi/abi.json'

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

export const useGetContentsOfUser = () => {
    const { address } = useAccount();
    const result = useReadContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: contractAbi,
        functionName: "getContentsOfUser",
        account: address,
    })
    return result.data || [];
}