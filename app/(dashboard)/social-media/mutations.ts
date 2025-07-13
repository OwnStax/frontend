import { useWriteContract, } from "wagmi";
import contractAbi from '@/abi/abi.json'
import { useMutation } from "@tanstack/react-query";
import { simulateContract } from '@wagmi/core';
import { config } from "@/providers/web3-provider";

const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

export const registerSocialMediaMutation = () => {
    const { writeContractAsync } = useWriteContract()
    
    return useMutation({
        mutationFn: async (content: string) => {
            await simulateContract(config, {
                address: CONTRACT_ADDRESS as `0x${string}`,
                abi: contractAbi,
                functionName: "addContent",
                args: [content],
            })
            
            const result = await writeContractAsync({
                address: CONTRACT_ADDRESS as `0x${string}`,
                abi: contractAbi,
                functionName: "addContent",
                args: [content],
            })

            return result;
        }
    })
}