import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Starter',
        price: 29,
        features: [
            'Basic cloud integration',
            'Up to 5 team members',
            '20GB storage',
            'Email support',
        ],
    },
    {
        name: 'Pro',
        price: 99,
        features: [
            'Advanced cloud integration',
            'Up to 20 team members',
            '100GB storage',
            'Priority email & phone support',
            'Advanced analytics',
        ],
    },
   
]
