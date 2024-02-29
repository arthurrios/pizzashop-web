import { api } from '@/lib/axios'

export interface DispatchOrderParams {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderParams) {
  api.patch(`/orders/${orderId}/dispatch`)
}
