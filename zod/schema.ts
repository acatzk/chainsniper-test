import { z } from 'zod'

export const UserInfoSchema = z.object({
  buyPercentage: z.string().optional(),
  sellPercentage: z.string().optional(),
  takeProfit: z.string().optional(),
  stopLoss: z.string().optional(),
  network: z.string().optional(),
  autoBuyAmount: z.number().optional(),
  liquidity: z.number().optional(),
  contactAddress: z.string().optional()
})

export type UserInformType = z.infer<typeof UserInfoSchema>
