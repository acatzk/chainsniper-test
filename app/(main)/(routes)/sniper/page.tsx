'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '~/components/ui/input'
import { Button } from '~/components/ui/button'
import { Separator } from '~/components/ui/separator'
import { UserInfoSchema, UserInformType } from '~/zod/schema'
import { Form, FormItem, FormLabel, FormField, FormControl } from '~/components/ui/form'

export default function Sniper(): JSX.Element {
  const form = useForm<UserInformType>({
    mode: 'onTouched',
    resolver: zodResolver(UserInfoSchema),
    defaultValues: {
      buyPercentage: '15 %',
      sellPercentage: '15 %',
      takeProfit: '15 %',
      stopLoss: '15 %',
      network: 'Solana',
      autoBuyAmount: 0.01,
      liquidity: 5,
      contactAddress: '0x570A5D26f7765Ecb712C0924E4De545B89fD43dF'
    }
  })

  const { control, handleSubmit } = form

  const onSumitForm: SubmitHandler<UserInformType> = (data): void => {
    console.log(data)
  }

  return (
    <section className="mt-8 rounded-lg bg-[#121732] p-6">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSumitForm)}>
          <article className="space-y-3">
            <h2 className="font-medium text-white">General Information</h2>
            <div className="grid grid-cols-4 gap-x-2">
              <FormField
                control={control}
                name="buyPercentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Buy Percentage</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="sellPercentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sell Percentage</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="takeProfit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Buy Percentage</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="stopLoss"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Take Profit</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-3">
              <FormField
                control={control}
                name="buyPercentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stop Loss</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="sellPercentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Auto-Buy Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="takeProfit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Liquidity</FormLabel>
                    <FormControl>
                      <Input placeholder="" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
          </article>
          <div className="py-6">
            <Separator />
          </div>
          <article className="space-y-3">
            <h2 className="font-medium text-white">Contract</h2>
            <FormField
              control={control}
              name="contactAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Address</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </article>
          <div className="flex justify-end space-x-2 py-4">
            <Button type="button" variant="outline">
              Cancel Snipe
            </Button>
            <Button type="button" variant="outline">
              Force Sell
            </Button>
            <Button type="submit">Snipe</Button>
          </div>
        </form>
      </Form>
    </section>
  )
}
